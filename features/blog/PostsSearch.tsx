import { Routes } from '@lib/routes';
import { useRouter } from 'next/router';

import { PostFrontmatter } from './models';
import { PostSearchHit } from './postSearchHit';
import PostsSearchComponent from './PostsSearchComponent';

type PostsSearchProps = { allPosts: PostFrontmatter[] };

export const PostsSearch = ({ allPosts }: PostsSearchProps) => {
  const router = useRouter();

  const handleHitClick = (frontMatter: PostSearchHit) =>
    router.push([Routes.BLOG, frontMatter.slug].join('/'));

  return <PostsSearchComponent allPosts={allPosts} onHitClick={handleHitClick} />;
};
