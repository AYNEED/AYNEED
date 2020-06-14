import { Access, Route, config } from 'src/navigation/routes';
import { ROUTES } from 'shared';
export * from 'src/navigation/store';

type AccessWithoutAll = Exclude<Access, 'all'>;
type RouteWithScheme = Route & { scheme: ROUTES };
type Routes = { [TKey in AccessWithoutAll]: RouteWithScheme[] };

const allRoutes: RouteWithScheme[] = Object.keys(config).map((scheme: any) => ({
  scheme,
  ...config[scheme as ROUTES],
}));

const filterConfig = (access: AccessWithoutAll) =>
  allRoutes.filter((item) => item.access === access || item.access === 'all');

export const routes: Routes = {
  authorized: filterConfig('authorized'),
  unauthorized: filterConfig('unauthorized'),
};
