import PostFeedPage from '@containers/PostFeedPage';
import { PostFrontmatter } from '@features/blog';
import { listPosts } from '@features/blog/api/posts';
import { GetStaticProps } from 'next';

type BlogRouteProps = { posts: PostFrontmatter[] };

const BlogRoute = ({ posts }: BlogRouteProps) => {
  return <PostFeedPage posts={posts} />;
};

export const getStaticProps: GetStaticProps<BlogRouteProps> = () => {
  const allPosts = listPosts();
  return { props: { posts: allPosts } };
};

export default BlogRoute;
