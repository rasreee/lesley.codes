import Meta from '@components/Meta';
import PostsSearch from '@features/postsSearch';
import {
  loadPostsSearchStaticProps,
  PostsSearchPageProps
} from '@features/postsSearch/postsSearchPageProps';
import { AppConfig } from '@lib/appConfig';
import { Section } from '@ui/components/Section';
import { H1, P } from '@ui/components/Typography';

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
