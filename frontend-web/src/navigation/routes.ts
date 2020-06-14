import { ROUTES } from 'shared';

export type Access = 'all' | 'authorized' | 'unauthorized';

export type Route = {
  access: Access;
  component: () => Promise<any>;
};

export const config: { [TKey in ROUTES]: Route } = {
  [ROUTES.MAIN]: {
    access: 'all',
    component: () => import('src/components/routes/Main'),
  },

  [ROUTES.SIGN_IN_EMAIL]: {
    access: 'unauthorized',
    component: () => import('src/components/routes/SignInEmail'),
  },

  [ROUTES.SIGN_UP_EMAIL]: {
    access: 'unauthorized',
    component: () => import('src/components/routes/SignUpEmail'),
  },
};
