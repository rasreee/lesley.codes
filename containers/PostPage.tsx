import { BlogPostView, Post, useRegisterPostView } from '@features/blog';
import { postApiKeys } from '@lib/api';
import { AppConfig, WEBSITE_HOST_URL } from '@lib/appConfig';
import { useQuery, UseQueryResult } from '@lib/swr';
import { H1, P } from '@ui/atoms';
import { ErrorMessage } from '@ui/components/ErrorMessage';
import { Meta, MetaProps, Section } from '@ui/layouts';
import { useEffect } from 'react';

const usePostData = (slug: string): UseQueryResult<Post> => {
  const key = postApiKeys.detail(slug).join('/');
  const response = useQuery<Post>(key);
  const { data, error } = response;
  useEffect(() => {
    console.log('🌙 Post Data: ', data);
    error && console.log('❌ Post Error: ', error);
  }, [data, error]);
  return response;
};

const PostPage = ({ slug }: { slug: string }) => {
  const { data: post, error } = usePostData(slug);

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
