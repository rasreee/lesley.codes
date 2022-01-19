import PostCard from '@components/PostCard';
import Search from '@features/search/Search';
import { useRouter } from 'next/router';

export function PostsSearch() {
  const router = useRouter();

  const handleHitClick = (item: SearchData) => {
    console.log('Selected post: ', item.slug);
    router.push(`/post/${item.slug}`);
  };

  const renderHit = (item: SearchData) => <PostCard {...item} />;

  return <Search apiRoute="/post" renderHit={renderHit} onHitClick={handleHitClick} />;
}
