import { isProduction } from './environment';

const DefaultRoutes = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/posts'
  }
];

const DevRoutes = [...DefaultRoutes];

export const Routes = isProduction() ? DefaultRoutes : DevRoutes;
