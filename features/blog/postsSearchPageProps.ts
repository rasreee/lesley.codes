import { listPosts, Post } from '@features/blog';
import { GetStaticProps } from 'next';

export type PostsSearchPageProps = {
  allPosts: Post[];
};

export const loadPostsSearchStaticProps = (): GetStaticProps<PostsSearchPageProps> => async () => {
  try {
    const allPosts = await listPosts();

    return { props: { allPosts } };
  } catch (err) {
    console.log(`❗ERROR: Failed to getStaticProps for all posts. Error: `, err);

    return { props: { allPosts: [] } };
  }
};
