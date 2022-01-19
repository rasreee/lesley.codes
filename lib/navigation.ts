export const ProdRouteNames = {
  Home: 'Home',
  Blog: 'Blog',
} as const;

export const DevRouteNames = {
  Playground: 'Playground',
} as const;

export const RouteNames = { ...ProdRouteNames, ...DevRouteNames };

export const DevRoutes = { [DevRouteNames.Playground]: '/playground' };

export const ProdRoutes = {
  [ProdRouteNames.Home]: '/',
  [ProdRouteNames.Blog]: '/blog',
};

export const Routes = {
  ...ProdRoutes,
  ...DevRoutes,
};
