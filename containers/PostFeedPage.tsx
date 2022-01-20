import { PostFrontmatter, PostsSearch } from '@features/blog';
import { postApiKeys } from '@lib/api';
import { useQuery, UseQueryResult } from '@lib/swr';
import { H1, P } from '@ui/atoms';
import { Meta, Section } from '@ui/layouts';
import { useEffect } from 'react';

const useAllPosts = (): UseQueryResult<PostFrontmatter[]> => {
  const response = useQuery<PostFrontmatter[]>(postApiKeys.lists().join('/'));
  const { data, error } = response;
  useEffect(() => {
    console.log('🌙 All Posts Data: ', data);
    error && console.log('❌ All POsts Error: ', error);
  }, [data, error]);
  return response;
};

type BlogPageProps = { posts: PostFrontmatter[] };

const PostFeedPage = ({ posts }: BlogPageProps) => {
  const { data: allPosts } = useAllPosts();
  return (
    <>
      <Meta title="Blog" />
      <Section>
        <H1>{'Blog'}</H1>
        <P>{'Thoughts and tutorials about web development, product validation, and Solana.'}</P>
      </Section>
      {allPosts && <PostsSearch posts={allPosts} />}
    </>
  );
};

export default PostFeedPage;
