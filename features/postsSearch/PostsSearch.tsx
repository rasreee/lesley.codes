import { usePosts } from '@db/posts/list';
import { buildUrl } from '@lib/routes';
import { Post } from '@models/post';
import { ErrorMessage } from '@ui/components/ErrorMessage';
import { SearchField, SearchResults, useSearch } from '@ui/search';
import { parseISO } from 'date-fns';
import { useRouter } from 'next/router';

import PostCard from './PostCard';

const compareCreatedAt = (a: SearchData, b: SearchData) =>
  -1 * (parseISO(a.createdAt).getTime(), parseISO(b.createdAt).getTime());

const processHits =
  (allData: Array<Post['frontMatter']>) =>
  (query: string): Array<Post['frontMatter']> => {
    if (!query) return allData;

    return allData
      .filter((frontMatter) => frontMatter.title.toLowerCase().includes(query.toLowerCase()))
      .slice()
      .sort(compareCreatedAt);
  };

interface PostsSearchProps {
  allData: Array<Post['frontMatter']>;
  onHitClick: (hit: Post['frontMatter']) => void;
}

const PostsSearchComponent = ({ allData, onHitClick }: PostsSearchProps) => {
  const { hits, query, setQuery } = useSearch(allData, processHits(allData));

  const renderHit = (hit: SearchData) => {
    return (
      <button
        className={
          'text-base font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-all'
        }
        onClick={() => onHitClick(hit)}
      >
        <PostCard {...hit} />
      </button>
    );
  };

  return (
    <>
      <SearchField query={query} onChange={setQuery} />
      <SearchResults hits={hits} renderHit={renderHit} />
    </>
  );
};

export const PostsSearch = () => {
  const { posts: posts, error } = usePosts();

  const router = useRouter();

  const handleHitClick = (frontMatter: Post['frontMatter']) =>
    router.push(buildUrl('post', frontMatter.slug));

  if (error) return <ErrorMessage>{error?.message}</ErrorMessage>;

  if (!posts) return <div>Loading...</div>;

  const allData = posts.map((post) => post.frontMatter);

  return <PostsSearchComponent allData={allData} onHitClick={handleHitClick} />;
};
