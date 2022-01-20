import PostsSearchPage from '@containers/PostsSearchPage';
import { listPosts } from '@features/blog/api/posts';
import { PostsSearchPageProps } from '@features/blog/postsSearchPageProps';
import { GetStaticProps } from 'next';

const BlogRoute = ({ posts }: PostsSearchPageProps) => {
  return <PostsSearchPage posts={posts} />;
};

export const getStaticProps: GetStaticProps<PostsSearchPageProps> = () => {
  const allPosts = listPosts();
  return { props: { posts: allPosts } };
};

export default BlogRoute;
