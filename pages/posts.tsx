import Meta from '@components/Meta';
import PostsSearch from '@features/postsSearch';
import { Section } from '@ui/components/Section';
import { H1, P } from '@ui/components/Typography';

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
