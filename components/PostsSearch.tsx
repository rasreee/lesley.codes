import { PostsApiResponse } from '@db/posts/list';
import Search from '@features/search/Search';
import { buildApiUrl, buildUrl } from '@lib/routes';
import { useQuery } from '@lib/useQuery';
import { parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { ErrorMessage } from './ErrorMessage';
import PostCard from './PostCard';

const compareCreatedAt = (a: SearchData, b: SearchData) =>
  -1 * (parseISO(a.createdAt).getTime(), parseISO(b.createdAt).getTime());

export const PostsSearch = () => {
  const { data, error } = useQuery<PostsApiResponse>(buildApiUrl('posts'));

  const allPosts = data?.allPosts;

  const router = useRouter();

  const handleHitClick = (item: SearchData) => router.push(buildUrl('post', item.slug));

  const [hits, setHits] = useState<SearchData[]>([]);

  const handleQuery = (query: string) => {
    if (!allPosts) return [];
    if (!query) return allPosts.map((post) => post.frontMatter);

    const newHits = allPosts
      .filter(({ frontMatter }) => frontMatter.title.toLowerCase().includes(query.toLowerCase()))
      .slice()
      .map((post) => post.frontMatter)
      .sort(compareCreatedAt);

    setHits(newHits);
  };

  if (error) return <ErrorMessage>{error?.message}</ErrorMessage>;

  if (!allPosts) return <div>Loading...</div>;

  return (
    <Search
      hits={hits}
      onQuery={handleQuery}
      renderHit={(hit) => <PostCard {...hit} />}
      onHitClick={handleHitClick}
    />
  );
};
