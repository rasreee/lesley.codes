import { BlogPostCard } from '@components/BlogPostCard';
import { ErrorMessage } from '@components/ErrorMessage';
import { SearchField } from '@components/SearchField';
import { useAllPosts } from '@db/posts/usePost';
import classed from '@lib/classed';

import { useSearch } from './useSearch';

const sharedStyles = 'flex gap-3 py-2 w-full relative';

const Results = classed('div', sharedStyles, 'flex-col');

export function PostsSearch() {
  const { data: allPosts, error } = useAllPosts();

  const { hits, query, setQuery } = useSearch({ allData: allPosts ?? [] });

  if (typeof error !== 'undefined') return <ErrorMessage>{error.message}</ErrorMessage>;

  if (typeof allPosts === 'undefined') return <div>Loading...</div>;

  return (
    <>
      <SearchField query={query} onChange={setQuery} />
      <Results>
        <ul className={'flex flex-col gap-10'}>
          {hits.map((post) => (
            <BlogPostCard key={post.title} {...post} />
          ))}
        </ul>
      </Results>
    </>
  );
}
