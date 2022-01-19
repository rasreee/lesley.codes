import { ErrorMessage } from '@components/ErrorMessage';
import PostCard from '@components/PostCard';
import { SearchField } from '@components/SearchField';
import { useAllPosts } from '@db/posts/usePost';
import { useRouter } from 'next/router';

import { SearchResults } from './SearchResults';
import { useSearch } from './useSearch';

export function PostsSearch() {
  const router = useRouter();

  const handleItemClick = (item: SearchData) => {
    console.log('Selected post: ', item.slug);
    router.push(`/post/${item.slug}`);
  };

  const { data: allPosts, error } = useAllPosts();

  const { hits, query, setQuery } = useSearch({ allData: allPosts ?? [] });

  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

  if (typeof allPosts === 'undefined') return <div>Loading...</div>;

  return (
    <>
      <SearchField query={query} onChange={setQuery} />
      <SearchResults
        items={hits}
        renderItem={(item) => <PostCard {...item} />}
        onItemClick={handleItemClick}
      />
    </>
  );
}
