import Search from '@features/search/Search';
import { buildApiUrl, buildUrl } from '@lib/routes';
import { useQuery } from '@lib/useQuery';
import { isBefore, isPast, parseISO } from 'date-fns';
import { useRouter } from 'next/router';

import { ErrorMessage } from './ErrorMessage';
import PostCard from './PostCard';

export const PostsSearch = () => {
  const { data: _data, error } = useQuery<{ data: SearchData[] }>(buildApiUrl('posts'));

  const data = _data?.data;

  const router = useRouter();

  const handleHitClick = (item: SearchData) => {
    const { slug } = item;
    console.log('Selected post: ', slug);
    router.push(buildUrl('post', slug));
  };

  if (error) {
    return <ErrorMessage>{error?.message}</ErrorMessage>;
  }

  if (typeof data === 'undefined' || data === null) {
    return <div>Loading...</div>;
  }

  const processQuery = (query: string): SearchData[] => {
    if (!query) return data ?? [];
    if (!data) return [];

    return data
      .filter((data) => data.title.toLowerCase().includes(query.toLowerCase()))
      .filter((data) => isPast(parseISO(data.createdAt)))
      .sort((a, b) => (isBefore(parseISO(a.createdAt), parseISO(b.createdAt)) ? 1 : -1));
  };

  return (
    <Search
      processQuery={processQuery}
      renderHit={(hit) => <PostCard {...hit} />}
      onHitClick={handleHitClick}
    />
  );
};
