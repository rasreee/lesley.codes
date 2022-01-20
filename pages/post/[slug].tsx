import {
  BlogPostView,
  getSlugQueryParam,
  Post,
  PostFrontmatter,
  useRegisterPostView
} from '@features/blog';
import { listPostSlugs } from '@features/blog/api/posts';
import { getPostBySlug } from '@lib/api';
import { AppConfig, WEBSITE_HOST_URL } from '@lib/appConfig';
import { buildApiUrl } from '@lib/routes';
import { useQuery, UseQueryResult } from '@lib/swr';
import { H1, P } from '@ui/atoms';
import { ErrorMessage } from '@ui/components/ErrorMessage';
import { Meta, MetaProps } from '@ui/layouts';
import { Section } from '@ui/layouts/Section';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';

type PostPageProps = { post: PostFrontmatter };

const usePostData = (slug: string): UseQueryResult<Post> => {
  const response = useQuery<Post>(buildApiUrl('post', slug));
  const { data, error } = response;
  useEffect(() => {
    console.log('🌙 Post Data: ', data);
    error && console.log('❌ Post Error: ', error);
  }, [data, error]);
  return response;
};

const PostRoute = ({ post }: PostPageProps) => {
  const { data: postData, error } = usePostData(post.slug);

  useRegisterPostView(post.slug);

  const customMeta: MetaProps = {
    title: `${post.title} - Lesley Chang`,
    description: post.description,
    image: `${WEBSITE_HOST_URL}${post.image}`,
    createdAt: post.createdAt,
    type: 'article'
  };

  return (
    <>
      <Meta {...customMeta} />
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <ErrorMessage>{error?.message}</ErrorMessage>
      {postData && <BlogPostView post={postData} />}
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

    console.log('✅ Got Post front matter: ', post);

    return { props: { post } };
  } catch (err) {
    console.log(`❗ERROR: Failed to getStaticProps for /post/[slug]. Error: `, err);

    return { redirect: { destination: '/', permanent: false } };
  }
};

export default PostRoute;
