import { PostsSearch } from '@features/blog';
import { listPosts } from '@features/blog/api/posts';
import { PostsSearchPageProps } from '@features/blog/postsSearchPageProps';
import { AppConfig } from '@lib/appConfig';
import { H1, P } from '@ui/atoms';
import { Meta, Section } from '@ui/layouts';
import { GetStaticProps } from 'next';

const IndexPage = ({ posts }: PostsSearchPageProps) => {
  return (
    <>
      <Meta />
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <PostsSearch posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<PostsSearchPageProps> = () => {
  const allPosts = listPosts();
  return { props: { posts: allPosts } };
};

export default IndexPage;
