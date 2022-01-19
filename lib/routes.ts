import { isDevelopment } from './environment';

const DevOnlyRoutes = [
  {
    title: 'Playground',
    path: '/playground',
  },
];

const Routes = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

if (isDevelopment()) {
  Routes.push(...DevOnlyRoutes);
}

export const RoutePaths = Routes.map((route) => route.path);

const RouteTitles = Routes.map((route) => route.title);

export { Routes, RouteTitles };

export const getRouteTitle = (pathname: string): string => {
  const basePath = pathname.split('/')[1];
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const pageTitle = Routes.find((route) => route.path === basePath)!.title;

  return pageTitle;
};
