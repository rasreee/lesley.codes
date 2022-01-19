import { isProduction } from './environment';

const DefaultRoutes = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/blog'
  }
];

const DevRoutes = [
  ...DefaultRoutes,
  {
    title: 'Playground',
    path: '/playground'
  }
];

export const Routes = isProduction() ? DefaultRoutes : DevRoutes;
