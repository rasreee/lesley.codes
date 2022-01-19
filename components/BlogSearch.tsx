import { useAllPosts } from '@db/posts/usePost';
import SearchProvider from '@features/search/SearchProvider';
import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import { useRouter } from 'next/router';

import { ErrorMessage } from './ErrorMessage';
import SearchPostsBar from './SearchPostsBar';
import { SearchPostsResults } from './SearchPostsResults';

export function BlogSearch() {
  const router = useRouter();

  const { data: allPosts, error } = useAllPosts();

  if (typeof error !== 'undefined') return <ErrorMessage>{error.message}</ErrorMessage>;

  if (typeof allPosts === 'undefined') return <div>Loading...</div>;

  const handleSelectPost = (selectedPost: BlogFrontmatterWithSlug) => {
    console.log('Selected post: ', selectedPost);
    router.push(`/posts/${selectedPost.slug}`);
  };

  return (
    <SearchProvider onSelect={handleSelectPost} allData={allPosts}>
      <SearchPostsBar />
      <SearchPostsResults />
    </SearchProvider>
  );
}
