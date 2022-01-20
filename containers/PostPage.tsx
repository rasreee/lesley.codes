import { getSlugQueryParam, Post } from '@features/blog';
import { postApiKeys } from '@lib/api';
import { useQuery, UseQueryResult } from '@lib/swr';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  // const { data: postData, error } = usePostData(post.slug);

  // useRegisterPostView(post.slug);

  // const customMeta: MetaProps = {
  //   title: `${post.title} - Lesley Chang`,
  //   description: post.description,
  //   image: `${WEBSITE_HOST_URL}${post.image}`,
  //   createdAt: post.createdAt,
  //   type: 'article'
  // };

  // return (
  //   <>
  //     <Meta {...customMeta} />
  //     <Section>
  //       <H1>{AppConfig.meta.title}</H1>
  //       <P>{AppConfig.meta.description}</P>
  //     </Section>
  //     <ErrorMessage>{error?.message}</ErrorMessage>
  //     {postData && <BlogPostView post={postData} />}
  //   </>
  // );

  return null;
};

export default PostPage;
