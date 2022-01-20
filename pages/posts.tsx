import { PostsSearch } from '@features/blog';
import { listPosts } from '@features/blog/api/posts';
import { PostsSearchPageProps } from '@features/blog/postsSearchPageProps';
import { H1, P } from '@ui/atoms';
import { Meta, Section } from '@ui/layouts';

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

export const getStaticProps = async () => {
  try {
    const allPosts = listPosts();

    return { props: { allPosts } };
  } catch (err) {
    console.log(`❗ERROR: Failed to getStaticProps for all posts. Error: `, err);

    return { props: { allPosts: [] } };
  }
};

export default BlogPage;
