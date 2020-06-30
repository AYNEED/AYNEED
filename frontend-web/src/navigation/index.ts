import { compile } from 'path-to-regexp';

import { Access, Route, config as routesConfig } from 'src/navigation/routes';
import { ROUTES } from 'shared';
export * from 'src/navigation/store';

type AccessWithoutAll = Exclude<Access, 'all'>;
type RouteWithScheme = Route & { scheme: ROUTES };
type Routes = { [TKey in AccessWithoutAll]: RouteWithScheme[] };

export type Scheme = {
  scheme: ROUTES;
  params?: { [key: string]: string | number };
};

const allRoutes: RouteWithScheme[] = Object.keys(routesConfig).map(
  (scheme: any) => ({
    scheme,
    ...routesConfig[scheme as ROUTES],
  })
);

const filterConfig = (access: AccessWithoutAll) =>
  allRoutes.filter((item) => item.access === access || item.access === 'all');

export const routes: Routes = {
  authorized: filterConfig('authorized'),
  unauthorized: filterConfig('unauthorized'),
};

export const config = routesConfig;

export const makeURL = (options: Scheme) => {
  const { scheme, params } = options;

  try {
    return scheme.includes(':') || params ? compile(scheme)(params) : scheme;
  } catch (error) {
    console.error('makeURL', options, error);
    return null;
  }
};
