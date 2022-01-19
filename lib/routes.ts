export const Routes = {
  HOME: '/',
  CONTENTS: '/contents',
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

export const RouteKeys = {
  SLUG: '[slug]'
} as const;

export const getPostsRoute = () => Routes.POSTS;

export const getPostRoute = (slug: string) => Routes.POST.replace(RouteKeys.SLUG, slug);
export const getPostApiRoute = (slug: string) => '/api' + getPostRoute(slug);

export const getContentMetaApiRoute = (slug: string) =>
  '/api' + Routes.CONTENTS.replace(RouteKeys.SLUG, slug);
