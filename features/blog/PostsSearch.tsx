import { RouteKeys, Routes } from '@lib/routes';
import { useRouter } from 'next/router';

import { PostFrontmatter } from './models';
import { PostSearchHit } from './postSearchHit';
import PostsSearchComponent from './PostsSearchComponent';

type PostsSearchProps = { posts: PostFrontmatter[] };

export const PostsSearch = ({ posts }: PostsSearchProps) => {
  const router = useRouter();

  const handleHitClick = (frontMatter: PostSearchHit) =>
    router.push(Routes.POST.replace(RouteKeys.SLUG, frontMatter.slug));

  return <PostsSearchComponent allPosts={posts} onHitClick={handleHitClick} />;
};
