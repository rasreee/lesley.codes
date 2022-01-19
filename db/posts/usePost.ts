import { BlogFrontmatter } from '@lib/frontmatter';
import useSWR from 'swr';

import { GetPostApiResponse } from './getPost';

export function useAllPosts() {
  return useSWR<BlogFrontmatter[], Error>('/api/posts');
}

export function usePostForSlug(slug: string | Falsy) {
  return useSWR<GetPostApiResponse, Error>(slug ? `/api/post/${slug}` : null);
}
