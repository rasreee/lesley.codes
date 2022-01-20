import { BlogPostView, useRegisterPostView } from '@features/blog';
import { usePost } from '@features/blog/api/usePost';
import { AppConfig, WEBSITE_HOST_URL } from '@lib/appConfig';
import { H1, P } from '@ui/atoms';
import { ErrorMessage } from '@ui/components/ErrorMessage';
import { Meta, MetaProps, Section } from '@ui/layouts';

const PostPage = ({ slug }: { slug: string }) => {
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
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <BlogPostView post={post} />
    </>
  );
};

export default PostPage;
