import { useAllPosts } from '@db/posts/usePost';
import SearchProvider from '@features/search/SearchProvider';

import { ErrorMessage } from './ErrorMessage';
import SearchPostsBar from './SearchPostsBar';
import { SearchPostsResults } from './SearchPostsResults';

export function BlogSearch() {
  const { data: allPosts, error } = useAllPosts();

  if (typeof error !== 'undefined') return <ErrorMessage>{error.message}</ErrorMessage>;

  if (typeof allPosts === 'undefined') return <div>Loading...</div>;

  return (
    <SearchProvider allData={allPosts}>
      <SearchPostsBar />
      <SearchPostsResults />
    </SearchProvider>
  );
}
