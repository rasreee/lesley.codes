import { PostsSearch } from '@features/blog';
import { PostsSearchPageProps } from '@features/blog/postsSearchPageProps';
import { H1, P } from '@ui/atoms';
import { Meta, Section } from '@ui/layouts';

const PostsSearchPage = ({ posts }: PostsSearchPageProps) => {
  return (
    <>
      <Meta title="Blog" />
      <Section>
        <H1>{'Blog'}</H1>
        <P>{'Thoughts and tutorials about web development, product validation, and Solana.'}</P>
      </Section>
      <PostsSearch posts={posts} />
    </>
  );
};

export default PostsSearchPage;
