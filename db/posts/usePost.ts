import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import useSWR from 'swr';

import { GetPostApiResponse } from './getPost';

export function useAllPosts() {
  return useSWR<BlogFrontmatterWithSlug[], Error>('/api/posts');
}

export function usePostForSlug(slug: string) {
  return useSWR<GetPostApiResponse, Error>(`/api/post/${slug}`);
}
