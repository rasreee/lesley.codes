import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import useSWR from 'swr';

export function useAllPosts() {
  return useSWR<BlogFrontmatterWithSlug[], Error>('/api/posts/all', {
    revalidateOnFocus: false,
    revalidateOnMount: false
  });
}
