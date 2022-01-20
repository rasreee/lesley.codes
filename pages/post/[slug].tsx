import BlogPostPage from '@containers/BlogPostPage';
import { getSlugQueryParam, useRegisterPostView } from '@features/blog';
import { usePost } from '@features/blog/api/usePost';
import { WEBSITE_HOST_URL } from '@lib/appConfig';
import { ErrorMessage } from '@ui/components/ErrorMessage';
import { Meta, MetaProps } from '@ui/layouts';
import { useRouter } from 'next/router';

const BlogPostRoute = () => {
  const router = useRouter();

  const slug = getSlugQueryParam(router.query);

  const { data: post, error } = usePost(slug);

  useRegisterPostView(slug);

  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;

  if (!post) return <div>Loading...</div>;

  const customMeta: MetaProps = {
    title: `${post.frontMatter.title} - Lesley Chang`,
    description: post.frontMatter.description,
    image: `${WEBSITE_HOST_URL}${post.frontMatter.image}`,
    createdAt: post.frontMatter.createdAt,
    type: 'article'
  };

  return (
    <>
      <Meta {...customMeta} />
      <BlogPostPage post={post} />
    </>
  );
};

export default BlogPostRoute;
