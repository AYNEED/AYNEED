/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ROUTES, DictionaryKey } from 'shared';

export type Access = 'all' | 'authorized' | 'unauthorized';

export type Route = {
  access: Access;
  title: DictionaryKey;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: () => Promise<any>;
};

export const config: { [TKey in ROUTES]: Route } = {
  [ROUTES.MAIN]: {
    access: 'all',
    title: 'web.routes.Main.title',
    component: () => import('src/routes/Main'),
  },

  [ROUTES.FORGOT_PASSWORD]: {
    access: 'unauthorized',
    title: 'web.routes.ForgotPassword.title',
    component: () => import('src/routes/ForgotPassword'),
  },

  [ROUTES.FORGOT_PASSWORD_CHANGE]: {
    access: 'authorized',
    title: 'web.routes.ForgotPasswordChange.title',
    component: () => import('src/routes/ForgotPasswordChange'),
  },

  [ROUTES.PROFILE_FILLING]: {
    access: 'authorized',
    title: 'web.routes.ProfileFilling.title',
    component: () => import('src/routes/ProfileFilling'),
  },

  [ROUTES.SIGN_IN_EMAIL]: {
    access: 'unauthorized',
    title: 'web.routes.SignInEmail.title',
    component: () => import('src/routes/SignInEmail'),
  },

  [ROUTES.SIGN_UP_EMAIL]: {
    access: 'unauthorized',
    title: 'web.routes.SignUpEmail.title',
    component: () => import('src/routes/SignUpEmail'),
  },

  [ROUTES.FEED]: {
    access: 'all',
    title: 'web.routes.Feed.title',
    component: () => import('src/routes/Feed'),
  },

  [ROUTES.USER]: {
    access: 'all',
    title: 'web.routes.User.title',
    component: () => import('src/routes/User'),
  },

  // This item must be the last in the list
  [ROUTES.ERROR_404]: {
    access: 'all',
    title: 'web.routes.Error404.title',
    component: () => import('src/routes/Error404'),
  },
};
