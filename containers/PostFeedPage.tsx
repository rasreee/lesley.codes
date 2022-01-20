import { PostFrontmatter, PostsSearch } from '@features/blog';
import { H1, P } from '@ui/atoms';
import { Meta, Section } from '@ui/layouts';

type BlogPageProps = { posts: PostFrontmatter[] };

const PostFeedPage = ({ posts }: BlogPageProps) => {
  return (
    <>
      <Meta title="Blog" />
      <Section>
        <H1>{'Blog'}</H1>
        <P>{'Thoughts and tutorials about web development, product validation, and Solana.'}</P>
      </Section>
      <PostsSearch posts={posts} />
    </>
  );
};

export default PostFeedPage;
