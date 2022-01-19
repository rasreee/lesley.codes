import { BlogSearch } from '@components/BlogSearch';
import Meta from '@components/Meta';
import { Section } from '@components/Section';
import { H1, P } from '@components/Typography';

const Blog = () => {
  return (
    <>
      <Meta title="Blog" />
      <Section>
        <H1>{'Blog'}</H1>
        <P>{'Thoughts and tutorials about web development, product validation, and Solana.'}</P>
      </Section>
      <Section>
        <BlogSearch />
      </Section>
    </>
  );
};

export default Blog;
