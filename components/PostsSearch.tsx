import PostCard from '@components/PostCard';
import Search from '@features/search/Search';
import { ApiRoutes, RouteKeys, Routes } from '@lib/routes';
import { useRouter } from 'next/router';

export function PostsSearch() {
  const router = useRouter();

  const handleHitClick = (item: SearchData) => {
    console.log('Selected post: ', item.slug);
    router.push(Routes.POST.replace(RouteKeys.SLUG, item.slug));
  };

  const renderHit = (item: SearchData) => <PostCard {...item} />;

  return <Search apiEndpoint={ApiRoutes.POSTS} renderHit={renderHit} onHitClick={handleHitClick} />;
}
