import {
  loadPostsSearchStaticProps,
  PostsSearch,
  PostsSearchPageProps
} from '@features/postsSearch';
import { Meta } from '@layouts/Meta';
import { Section } from '@layouts/Section';
import { H1, P } from '@ui/components/Typography';

const BlogPage = (props: PostsSearchPageProps) => {
  return (
    <>
      <Meta title="Blog" />
      <Section>
        <H1>{'Blog'}</H1>
        <P>{'Thoughts and tutorials about web development, product validation, and Solana.'}</P>
      </Section>
      <PostsSearch allPosts={props.allPosts} />
    </>
  );
};

export const getStaticProps = loadPostsSearchStaticProps();

export default BlogPage;
