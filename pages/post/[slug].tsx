import PostPage from '@containers/PostPage';
import { getSlugQueryParam } from '@features/blog';
import { useRouter } from 'next/router';

const BlogPostRoute = () => {
  const router = useRouter();

  const slug = getSlugQueryParam(router.query);

  console.log(`👌 Getting Post data for slug=${slug}`);

  return <PostPage slug={slug} />;
};

export default BlogPostRoute;
