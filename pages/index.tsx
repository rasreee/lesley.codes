import Meta from '@components/Meta';
import { PostsSearch } from '@components/PostsSearch';
import { Section } from '@components/Section';
import { H1, P } from '@components/Typography';
import { AppConfig } from '@lib/appConfig';

const Index = () => {
  return (
    <>
      <Meta />
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <PostsSearch />
    </>
  );
};

export default Index;
