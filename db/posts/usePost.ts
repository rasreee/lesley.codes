import { BlogFrontmatter } from '@lib/frontmatter';
import useSWR from 'swr';

import { GetPostApiResponse } from './getPost';

export function useAllPosts() {
  return useSWR<BlogFrontmatter[], Error>('/api/posts');
}

export function usePostForSlug(slug: string) {
  return useSWR<GetPostApiResponse, Error>(`/api/post/${slug}`);
}
