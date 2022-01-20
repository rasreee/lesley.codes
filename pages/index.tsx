import { PostsSearch } from '@features/blog';
import { listPosts } from '@features/blog/api/posts';
import { PostsSearchPageProps } from '@features/blog/postsSearchPageProps';
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

export const getStaticProps = async () => {
  try {
    const allPosts = listPosts();

    return { props: { allPosts } };
  } catch (err) {
    console.log(`❗ERROR: Failed to getStaticProps for all posts. Error: `, err);

    return { props: { allPosts: [] } };
  }
};

export default IndexPage;
