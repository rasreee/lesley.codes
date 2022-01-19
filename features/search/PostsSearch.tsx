import { BlogPostCard } from '@components/BlogPostCard';
import { ErrorMessage } from '@components/ErrorMessage';
import { WideSearchInput } from '@components/WideSearchInput';
import { useAllPosts } from '@db/posts/usePost';
import SearchIcon from '@ui/icons/SearchIcon';
import classNames from 'classnames';

import { useSearch } from './useSearch';

export function PostsSearch() {
  const { data: allPosts, error } = useAllPosts();

  const { query, setQuery, hits } = useSearch({ allData: allPosts ?? [] });

  if (typeof error !== 'undefined') return <ErrorMessage>{error.message}</ErrorMessage>;

  if (typeof allPosts === 'undefined') return <div>Loading...</div>;

  return (
    <>
      <div className={classNames('flex flex-col gap-3 py-2', 'relative w-full')}>
        <WideSearchInput query={query} onChange={setQuery} />
        <SearchIcon className="absolute right-3 top-[1.125rem]" />
      </div>
      <div className={classNames('flex flex-col gap-3 py-2', 'relative w-full')}>
        <ul className={'flex flex-col gap-10'}>
          {hits.map((post) => (
            <BlogPostCard key={post.title} {...post} />
          ))}
        </ul>
      </div>
    </>
  );
}
