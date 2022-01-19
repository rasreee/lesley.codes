import PostCard from '@components/PostCard';
import Search from '@features/search/Search';
import { ApiEndpoints } from '@lib/apiEndpoints';
import { useRouter } from 'next/router';

export function PostsSearch() {
  const router = useRouter();

  const handleHitClick = (item: SearchData) => {
    console.log('Selected post: ', item.slug);
    router.push(`${ApiEndpoints.POST}/${item.slug}`);
  };

  const renderHit = (item: SearchData) => <PostCard {...item} />;

  return (
    <Search apiEndpoint={ApiEndpoints.POSTS} renderHit={renderHit} onHitClick={handleHitClick} />
  );
}
