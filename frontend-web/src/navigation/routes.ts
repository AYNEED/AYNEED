import { ROUTES, DictionaryKey } from 'shared';

export type Access = 'all' | 'authorized' | 'unauthorized';

export type Route = {
  access: Access;
  title: DictionaryKey;
  component: () => Promise<any>;
};

export const config: { [TKey in ROUTES]: Route } = {
  [ROUTES.MAIN]: {
    access: 'all',
    title: 'web.components.routes.Main.title',
    component: () => import('src/routes/Main'),
  },

  [ROUTES.SIGN_IN_EMAIL]: {
    access: 'unauthorized',
    title: 'web.components.routes.SignInEmail.title',
    component: () => import('src/routes/SignInEmail'),
  },

  [ROUTES.SIGN_UP_EMAIL]: {
    access: 'unauthorized',
    title: 'web.components.routes.SignUpEmail.title',
    component: () => import('src/routes/SignUpEmail'),
  },

  [ROUTES.FEED]: {
    access: 'all',
    title: 'web.components.routes.Feed.title',
    component: () => import('src/routes/Feed'),
  },
};
