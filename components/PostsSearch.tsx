import { usePosts } from '@db/posts/list';
import Search from '@features/search/Search';
import { buildUrl } from '@lib/routes';
import { Post } from '@models/post';
import { parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { ErrorMessage } from './ErrorMessage';
import PostCard from './PostCard';

const compareCreatedAt = (a: SearchData, b: SearchData) =>
  -1 * (parseISO(a.createdAt).getTime(), parseISO(b.createdAt).getTime());

export const PostsSearch = () => {
  const { posts, error } = usePosts();

  const [hits, setHits] = useState<Array<Post['frontMatter']> | undefined>(() =>
    posts?.map((post) => post.frontMatter)
  );

  const handleQuery = (query: string) => {
    if (!posts) return [];
    if (!query) return posts.map((post) => post.frontMatter);

    const newHits = posts
      .filter(({ frontMatter }) => frontMatter.title.toLowerCase().includes(query.toLowerCase()))
      .slice()
      .map((post) => post.frontMatter)
      .sort(compareCreatedAt);

    setHits(newHits);
  };

  const router = useRouter();

  const renderHit = (hit: SearchData) => {
    const handleHitClick = () => {
      const { slug } = hit;
      router.push(buildUrl('post', slug));
    };

    return (
      <button
        className={
          'text-base font-semibold text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition-all'
        }
        onClick={handleHitClick}
      >
        <PostCard {...hit} />
      </button>
    );
  };

  if (error) return <ErrorMessage>{error?.message}</ErrorMessage>;

  if (!hits) return <div>Loading...</div>;

  return <Search hits={hits} onQuery={handleQuery} renderHit={renderHit} />;
};
