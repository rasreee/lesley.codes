export const Routes = {
  HOME: '/',
  POSTS: '/posts',
  POST: '/post/[slug]'
} as const;

export const RouteNames = {
  HOME: 'Home',
  POSTS: 'Blog',
  POST: 'Blog'
} as const;

export const routes = [
  {
    title: RouteNames.HOME,
    path: Routes.HOME
  },
  {
    title: RouteNames.POSTS,
    path: Routes.POSTS
  },
  {
    title: RouteNames.POST,
    path: Routes.POST
  }
];

export const ApiRoutes = {
  CONTENTS: '/api/contents',
  POSTS: '/api/posts',
  POST: '/api/post/[slug]'
} as const;

export const RouteKeys = {
  SLUG: '[slug]'
} as const;
