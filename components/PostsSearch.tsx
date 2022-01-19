import PostCard from '@components/PostCard';
import Search from '@features/search/Search';
import { getPostRoute, getPostsRoute } from '@lib/routes';
import { useRouter } from 'next/router';

export function PostsSearch() {
  const router = useRouter();

  const handleHitClick = (item: SearchData) => {
    console.log('Selected post: ', item.slug);
    router.push(getPostRoute(item.slug));
  };

  const renderHit = (item: SearchData) => <PostCard {...item} />;

  return <Search apiEndpoint={getPostsRoute()} renderHit={renderHit} onHitClick={handleHitClick} />;
}
