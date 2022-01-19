import { BlogSearch } from '@components/BlogSearch';
import Meta from '@components/Meta';
import { Section } from '@components/Section';
import { H1, P } from '@components/Typography';
import { AppConfig } from '@lib/appConfig';

const AllPosts = () => {
  return (
    <>
      <Meta />
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <Section>
        <BlogSearch />
      </Section>
    </>
  );
};

export default AllPosts;
