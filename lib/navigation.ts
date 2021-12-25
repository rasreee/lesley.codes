export const RouteNames = {
  Home: 'Home',
  Blog: 'Blog',
} as const;

export const Routes = {
  [RouteNames.Home]: '/',
  [RouteNames.Blog]: '/blog',
};
