export const ApiRoutes = {
  CONTENTS: '/api/contents',
  POSTS: '/api/posts',
  POST: '/api/post/[slug]'
} as const;

export const ApiRouteKeys = {
  SLUG: '[slug]'
} as const;
