import PostCard from '@components/PostCard';
import Search from '@features/search/Search';
import { ApiRoutes } from '@lib/apiRoutes';
import { useRouter } from 'next/router';

export function PostsSearch() {
  const router = useRouter();

  const handleHitClick = (item: SearchData) => {
    console.log('Selected post: ', item.slug);
    router.push(`${ApiRoutes.POST}/${item.slug}`);
  };

  const renderHit = (item: SearchData) => <PostCard {...item} />;

  return <Search apiEndpoint={ApiRoutes.POSTS} renderHit={renderHit} onHitClick={handleHitClick} />;
}
