import { BlogPostView, getSlugQueryParam, Post } from '@features/blog';
import { getPost, listPostSlugs } from '@features/blog/api/posts';
import { AppConfig } from '@lib/appConfig';
import { H1, P } from '@ui/atoms';
import { Section } from '@ui/layouts/Section';
import { GetStaticPaths, GetStaticProps } from 'next';

type PostPageProps = { post: Post };

const PostRoute = ({ post }: PostPageProps) => {
  return (
    <>
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <BlogPostView post={post} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const slugs = listPostSlugs();
  return { paths: slugs.map((slug) => `/post/${slug}`), fallback: false };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (args) => {
  try {
    if (!args.params) throw new Error('getStaticProps called with no params for /post/[slug]');

    const post = await getPost(getSlugQueryParam(args.params));

    return { props: { post } };
  } catch (err) {
    console.log(`❗ERROR: Failed to getStaticProps for /post/[slug]. Error: `, err);

    return { redirect: { destination: '/', permanent: false } };
  }
};

export default PostRoute;
