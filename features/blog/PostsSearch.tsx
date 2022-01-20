import { Post } from '@features/blog';
import { buildUrl } from '@lib/routes';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { PostSearchHit } from './postSearchHit';
import PostsSearchComponent from './PostsSearchComponent';

type PostsSearchProps = { allPosts: Post[] };

export const PostsSearch = ({ allPosts }: PostsSearchProps) => {
  const router = useRouter();

  const handleHitClick = (frontMatter: PostSearchHit) =>
    router.push(buildUrl('post', frontMatter.slug));

  const allData = useMemo(() => allPosts.map((post) => post.frontMatter), [allPosts]);

  return <PostsSearchComponent allData={allData} onHitClick={handleHitClick} />;
};
