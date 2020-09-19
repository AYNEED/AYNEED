import { Resolvers } from 'src/__generated__';
import { UserModel } from 'src/models/user';
import { userDriver } from 'src/resolvers/drivers';
import {
  createPasswordHash,
  createRandomString,
  verifyPassword,
} from 'src/utils/password';
import { EVENTS, UPDATES } from 'src/notifications/events';
import { send } from 'src/notifications';
import { validators, ValidationError } from 'shared';
import { createUser, updateUser, updateUserToken } from 'src/helpers/users';
import {
  createAccessToken,
  createRefreshToken,
} from 'src/middleware/authorization';

export const signInEmail: Resolvers['Mutation']['signInEmail'] = async (
  parent,
  { email, password, client },
  { req, res }
) => {
  await validators.signInEmail.validate({ email, password });

  const data = await UserModel.findOne({
    'contacts.email.value': email,
  });

  if (
    !data ||
    (data.private.password && !verifyPassword(password, data.private.password))
  ) {
    throw new ValidationError('error.emailOrPassword.incorrect');
  }

  const access = createAccessToken({ id: data.id });
  const refresh = createRefreshToken({ id: data.id });

  const updated = await updateUserToken(data.id, { access, refresh });

  const user = userDriver(updated, {
    network: { isOnline: false, client },
  });

  if (user.statistics.completeness >= 100) {
    await send.update({
      event: UPDATES.USER_UPDATED,
      payload: user,
    });
  }

  res.cookie('access', access);
  res.cookie('refresh', refresh);
  req.user = { id: user.id };

  return user;
};

export const signUpEmail: Resolvers['Mutation']['signUpEmail'] = async (
  parent,
  { email, password, firstName, lastName, locale, isAgree, client },
  { req, res }
) => {
  await validators.signUpEmail.validate({
    firstName,
    lastName,
    email,
    password,
  });

  // TODO: check: if the user exists -> authorize

  const data = await createUser({
    email,
    password,
    firstName,
    lastName,
    locale,
    isAgree,
  });

  const access = createAccessToken({ id: data.id });
  const refresh = createRefreshToken({ id: data.id });

  const updated = await updateUserToken(data.id, { access, refresh });

  const user = userDriver(updated, {
    network: { isOnline: false, client },
  });

  res.cookie('access', access);
  res.cookie('refresh', refresh);
  req.user = { id: user.id };

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
    await updateUser(data.id, {
      private: {
        ...data.private,
        recovery: {
          date: Date(),
          code: createRandomString() + data.id,
        },
      },
    });

    await send.notification({
      event: EVENTS.ON_USER_FORGOT_PASSWORD,
      payload: { from: 'ayneed', to: data.id },
    });
  }

  // This is the correct logic: we don’t want to show
  // the frontend that the user is not in the DB,
  // therefore we always say that the email has been sent.
  return true;
};

export const forgotPasswordChange: Resolvers['Mutation']['forgotPasswordChange'] = async (
  parent,
  { password, recoveryCode, client },
  { req, res }
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

  const access = createAccessToken({ id: data.id });
  const refresh = createRefreshToken({ id: data.id });

  const updated = await updateUser(data.id, {
    private: {
      password: {
        hash,
        salt,
      },
      token: {
        access,
        refresh,
      },
      recovery: null,
    },
  });

  const user = userDriver(updated, {
    network: { isOnline: false, client },
  });

  if (user.statistics.completeness >= 100) {
    await send.update({
      event: UPDATES.USER_UPDATED,
      payload: user,
    });
  }

  res.cookie('access', access);
  res.cookie('refresh', refresh);
  req.user = { id: user.id };

  return user;
};

export const signOut: Resolvers['Mutation']['signOut'] = async (
  parent,
  args,
  { req, res }
) => {
  if (req.user?.id) {
    await updateUserToken(req.user.id, { access: '', refresh: '' });
    delete req.user.id;
  }

  res.clearCookie('access');
  res.clearCookie('refresh');

  return true;
};
