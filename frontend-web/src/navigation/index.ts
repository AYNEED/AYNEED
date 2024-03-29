import { History } from 'history';
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
  (scheme: string) =>
    ({
      scheme,
      ...routesConfig[scheme as ROUTES],
    } as never)
);

const filterConfig = (access: AccessWithoutAll): RouteWithScheme[] =>
  allRoutes.filter((item) => item.access === access || item.access === 'all');

export const routes: Routes = {
  authorized: filterConfig('authorized'),
  unauthorized: filterConfig('unauthorized'),
};

export const config = routesConfig;

export const makeURL = (options: Scheme): string | null => {
  const { scheme, params } = options;

  try {
    return scheme.includes(':') || params ? compile(scheme)(params) : scheme;
  } catch (error) {
    console.error('makeURL', options, error);
    return null;
  }
};

export const updateHistory = <T extends {} = {}>(
  history: History<History.PoorMansUnknown>,
  route: ROUTES,
  payload: T
): void => {
  const searchParams = new URLSearchParams(payload);

  history.push(`${route}?${searchParams.toString()}`);
};
