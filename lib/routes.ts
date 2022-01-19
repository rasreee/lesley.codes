import { isProduction } from './environment';

const DefaultRoutes = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/posts/all'
  }
];

const DevRoutes = [...DefaultRoutes];

export const Routes = isProduction() ? DefaultRoutes : DevRoutes;
