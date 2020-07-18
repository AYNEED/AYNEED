import { Resolvers, Client } from 'src/__generated__';
import { events, pubsub } from 'src/resolvers/subscriptions';
import { UserModel, UserComplete } from 'src/models/user';
import { userDriver } from 'src/resolvers/drivers';
import {
  createPasswordHash,
  createRandomString,
  verifyPassword,
} from 'src/utils/password';
import { profileCompleteness } from 'src/utils/profileCompleteness';
import { validators, ValidationError } from 'shared';

export const signInEmail: Resolvers['Mutation']['signInEmail'] = async (
  parent,
  { email, password }
) => {
  await validators.signInEmail.validate({ email, password });

  const data = await UserModel.findOne({
    'contacts.email.value': email,
  });

  if (!data || !verifyPassword(password, data.private.password)) {
    throw new ValidationError('error.emailOrPassword.incorrect');
  }

  const user = userDriver(data, {
    network: { isOnline: false, client: Client.Desktop },
  });

  // TODO: create session

  pubsub.publish(events.user.updated, user);

  return user;
};

export const signUpEmail: Resolvers['Mutation']['signUpEmail'] = async (
  parent,
  { email, password, firstName, lastName, locale, isAgree }
) => {
  await validators.signUpEmail.validate({
    firstName,
    lastName,
    email,
    password,
  });

  // TODO: check: if the user exists -> authorize

  const salt = createRandomString();
  const hash = createPasswordHash(password, salt);
  const userComplete: UserComplete = {
    about: {
      bio: null,
      skills: [],
      career: [],
      education: [],
    },
    personal: {
      firstName,
      lastName,
      isAgree: true,
      bornAt: null,
      photo: [],
    },
    regional: {
      city: null,
      state: null,
      country: null,
      locale,
      languages: [],
    },
    contacts: {
      email: {
        value: email,
        isVisible: false,
        isVerified: false,
      },
      phone: null,
      vkontakte: null,
      facebook: null,
      instagram: null,
      telegram: null,
      linkedin: null,
    },
  };

  const completeness: number = profileCompleteness(userComplete);

  const data = await UserModel.create({
    ...userComplete,
    statistics: {
      completeness,
    },
    private: {
      password: {
        hash,
        salt,
      },
      recovery: null,
    },
  });

  const user = userDriver(data, {
    network: { isOnline: false, client: Client.Desktop },
  });

  // TODO: create session

  pubsub.publish(events.user.added, user);

  return user;
};

export const forgotPassword: Resolvers['Mutation']['forgotPassword'] = async (
  parent,
  { email }
) => {
  await validators.forgotPassword.validate({ email });

  const data = await UserModel.findOne({
    'contacts.email.value': email,
  });

  if (data) {
    // TODO: send email
  }

  // This is the correct logic: we don’t want to show
  // the frontend that the user is not in the DB,
  // therefore we always say that the email has been sent.
  return true;
};

export const forgotPasswordChange: Resolvers['Mutation']['forgotPasswordChange'] = async (
  parent,
  { password, recoveryCode, client }
) => {
  await validators.forgotPasswordChange.validate({ password });

  const data = await UserModel.findOne({
    'private.recovery.code': recoveryCode,
  });

  if (!data) {
    throw new ValidationError('error.recoveryCode.notFound');
  }

  // TODO: check code expiration date

  const salt = createRandomString();
  const hash = createPasswordHash(password, salt);

  const updated = await UserModel.findOneAndUpdate(
    { _id: data.id },
    {
      private: {
        password: {
          hash,
          salt,
        },
        recovery: null,
      },
    }
  );

  if (!updated) {
    throw new ValidationError('error.recoveryCode.notFound');
  }

  const user = userDriver(updated, {
    network: { isOnline: false, client },
  });

  // TODO: create session

  pubsub.publish(events.user.added, user);

  return user;
};
