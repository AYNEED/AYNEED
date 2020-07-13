import { Resolvers, Client } from 'src/__generated__';
import { events, pubsub } from 'src/resolvers/subscriptions';
import { UserModel } from 'src/models/user';
import { userDriver } from 'src/resolvers/drivers';
import {
  createPasswordHash,
  createRandomString,
  verifyPassword,
} from 'src/utils/password';
import { validation } from 'shared';

export const signInEmail: Resolvers['Mutation']['signInEmail'] = async (
  parent,
  { email, password }
) => {
  await validation.signInEmail.validate({ email, password });

  const data = await UserModel.findOne({
    'contacts.email.value': email,
  });

  if (!data || !verifyPassword(password, data.private.password)) {
    throw new Error('error.emailOrPassword.incorrect');
  }

  const user = userDriver(data, {
    network: { isOnline: false, client: Client.Desktop },
  });

  pubsub.publish(events.user.updated, user);

  return user;
};

export const signUpEmail: Resolvers['Mutation']['signUpEmail'] = async (
  parent,
  { email, password, firstName, lastName, locale, isAgree }
) => {
  const salt = createRandomString();
  const hash = createPasswordHash(password, salt);
  const data = await UserModel.create({
    network: {
      isOnline: false,
      client: Client.Desktop,
    },
    about: {
      bio: null,
      skills: [],
      career: [],
      education: [],
    },
    personal: {
      firstName,
      lastName,
      isAgree,
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
    statistics: {
      completeness: 0,
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

  pubsub.publish(events.user.added, user);

  return user;
};
