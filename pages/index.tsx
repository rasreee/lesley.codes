import { loadPostsSearchStaticProps, PostsSearch, PostsSearchPageProps } from '@features/blog';
import { AppConfig } from '@lib/appConfig';
import { H1, P } from '@ui/atoms';
import { Meta, Section } from '@ui/layouts';

const IndexPage = (props: PostsSearchPageProps) => {
  return (
    <>
      <Meta />
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <PostsSearch allPosts={props.allPosts} />
    </>
  );
};

export const getStaticProps = loadPostsSearchStaticProps();

export default IndexPage;
