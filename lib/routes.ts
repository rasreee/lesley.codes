import { isProduction } from './environment';
import { getBasePath } from './utils/getBasePath';

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
  ...(!isProduction() ? DevOnlyRoutes : []),
];

export { Routes };

export const getRouteTitle = (pathname: string): string => {
  const basePath = getBasePath(pathname);
  const pageTitle = Routes.find((route) => route.path === basePath)?.title;
  if (!pageTitle) {
    const error = new Error(
      `could not find route title for pathname=${pathname} and basePath=${basePath}`
    );
    console.error(error);
    console.log('Routes: ', JSON.stringify(Routes, null, 4));
    throw error;
  }

  return pageTitle;
};
