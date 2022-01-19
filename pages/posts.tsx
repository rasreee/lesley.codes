import Meta from '@components/Meta';
import { Section } from '@components/Section';
import { H1, P } from '@components/Typography';
import { PostsSearch } from '@features/search/PostsSearch';

const Posts = () => {
  return (
    <>
      <Meta title="Blog" />
      <Section>
        <H1>{'Blog'}</H1>
        <P>{'Thoughts and tutorials about web development, product validation, and Solana.'}</P>
      </Section>
      <PostsSearch />
    </>
  );
};

export default Posts;
