import { BlogPostView, getSlugQueryParam, Post, useRegisterPostView } from '@features/blog';
import { listPostSlugs } from '@features/blog/api/posts';
import { getPostBySlug } from '@lib/api';
import { AppConfig, WEBSITE_HOST_URL } from '@lib/appConfig';
import { H1, P } from '@ui/atoms';
import { Meta, MetaProps } from '@ui/layouts';
import { Section } from '@ui/layouts/Section';
import { GetStaticProps } from 'next';

type PostPageProps = { post: Post };

const PostRoute = ({ post }: PostPageProps) => {
  useRegisterPostView(post.frontMatter.slug);

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

export const getStaticPaths = async () => {
  const slugs = listPostSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (args) => {
  try {
    if (!args.params) throw new Error('getStaticProps called with no params for /post/[slug]');

    const slug = getSlugQueryParam(args.params);

    console.log(`👌 Getting Post data for slug=${slug}`);

    const post = getPostBySlug(slug);

    console.log('✅ Got Post: ', post);

    return { props: { post } };
  } catch (err) {
    console.log(`❗ERROR: Failed to getStaticProps for /post/[slug]. Error: `, err);

    return { redirect: { destination: '/', permanent: false } };
  }
};

export default PostRoute;
