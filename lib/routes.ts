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

const DevRoutes = [...DefaultRoutes];

export const Routes = isProduction() ? DefaultRoutes : DevRoutes;
