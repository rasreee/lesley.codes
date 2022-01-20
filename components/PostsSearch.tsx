import PostCard from '@components/PostCard';
import Search from '@features/search/Search';
import { buildApiUrl, buildUrl } from '@lib/routes';
import { useRouter } from 'next/router';

export function PostsSearch() {
  const router = useRouter();

  const handleHitClick = (item: SearchData) => {
    console.log('Selected post: ', item.slug);
    router.push(buildUrl('posts'));
  };

  const renderHit = (item: SearchData) => <PostCard {...item} />;

  return (
    <Search apiEndpoint={buildApiUrl('posts')} renderHit={renderHit} onHitClick={handleHitClick} />
  );
}
