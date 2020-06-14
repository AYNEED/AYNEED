import { Access, Route, config as routesConfig } from 'src/navigation/routes';
import { ROUTES } from 'shared';
export * from 'src/navigation/store';

type AccessWithoutAll = Exclude<Access, 'all'>;
type RouteWithScheme = Route & { scheme: ROUTES };
type Routes = { [TKey in AccessWithoutAll]: RouteWithScheme[] };

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
