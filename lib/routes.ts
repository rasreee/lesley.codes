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

export const routes = isProduction() ? DefaultRoutes : DevRoutes;

export const Routes = {
  HOME: '/',
  BLOG: '/posts',
  POST: '/post/[slug]'
};

export const ApiRoutes = {
  CONTENTS: '/api/contents',
  POSTS: '/api/posts',
  POST: '/api/post/[slug]'
} as const;

export const RouteKeys = {
  SLUG: '[slug]'
} as const;
