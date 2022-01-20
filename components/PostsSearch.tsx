import Search from '@features/search/Search';
import { buildApiUrl, buildUrl } from '@lib/routes';
import { useQuery } from '@lib/useQuery';
import { parseISO } from 'date-fns';
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

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleQuery = (query: string, allData: SearchData[]): SearchData[] => {
    let res = allData
      .filter((data) => data.title.toLowerCase().includes(query.toLowerCase()))
      .slice();

    res = res.sort(compareCreatedAt);

    console.log('AFTER sort: ', res);

    return res;
  };

  return (
    <Search
      allData={data ?? []}
      onQuery={handleQuery}
      renderHit={(hit) => <PostCard {...hit} />}
      onHitClick={handleHitClick}
    />
  );
};

export const compareCreatedAt = (a: SearchData, b: SearchData) =>
  -1 * (parseISO(a.createdAt).getTime(), parseISO(b.createdAt).getTime());
