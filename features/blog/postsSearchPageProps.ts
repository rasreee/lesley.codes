import { GetStaticProps } from 'next';

import { listPosts } from './api/posts';
import { PostFrontmatter } from './models';

export type PostsSearchPageProps = {
  allPosts: PostFrontmatter[];
};

export const loadPostsSearchStaticProps = (): GetStaticProps<PostsSearchPageProps> => async () => {
  try {
    const allPosts = listPosts();

    return { props: { allPosts } };
  } catch (err) {
    console.log(`❗ERROR: Failed to getStaticProps for all posts. Error: `, err);

    return { props: { allPosts: [] } };
  }
};
