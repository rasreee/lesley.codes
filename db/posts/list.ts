import { POSTS_PATH } from '@lib/mdx';
import { buildApiUrl } from '@lib/routes';
import { useQuery } from '@lib/useQuery';
import { ALL_POST_FIELDS, Post } from '@models/post';
import fs from 'fs';

import { getPost } from './detail';

export type PostsApiResponse = { posts: Post[] };

function listPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

export async function listPosts(fields: readonly string[] = ALL_POST_FIELDS): Promise<Post[]> {
  const slugs = listPostSlugs();

  return Promise.all(slugs.map((slug) => getPost(slug, fields)));
}

export function usePosts() {
  const { data, error } = useQuery<PostsApiResponse>(buildApiUrl('posts'));

  const posts = data?.posts;

  return { posts, error };
}
