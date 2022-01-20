import PostFeedPage from '@containers/PostFeedPage';
import PostPage from '@containers/PostPage';
import { getSlugQueryParam } from '@features/blog';
import { useRouter } from 'next/router';

const BlogRoute = () => {
  const router = useRouter();

  if (!('slug' in router.query)) return <PostFeedPage />;

  const slug = getSlugQueryParam(router.query);

  console.log(`👌 Getting Post data for slug=${slug}`);

  return <PostPage slug={slug} />;
};

export default BlogRoute;
