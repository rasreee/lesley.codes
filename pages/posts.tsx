import Meta from '@components/Meta';
import { PostsSearch } from '@components/PostsSearch';
import { Section } from '@components/Section';
import { H1, P } from '@components/Typography';

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
