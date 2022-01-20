import { ALL_POST_FIELDS, Post } from '@features/blog';
import { POSTS_PATH } from '@lib/mdx';
import { buildApiUrl } from '@lib/routes';
import { useQuery } from '@lib/swr';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
export interface PostApiResponse extends Post {}

export async function getPost(
  slug: string,
  fields: readonly string[] = ALL_POST_FIELDS
): Promise<Post> {
  const postFilePath = path.join(POSTS_PATH, slug);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings]
    },
    scope: data
  });

  return {
    source: mdxSource,
    frontMatter: data as Post['frontMatter']
  };
}

export type PostsApiResponse = { posts: Post[] };

function listPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

export function listPosts(fields: readonly string[] = ALL_POST_FIELDS): Promise<Post[]> {
  const slugs = listPostSlugs();

  return Promise.all(slugs.map((slug) => getPost(slug, fields)));
}

export function usePosts() {
  const { data, error } = useQuery<PostsApiResponse>(buildApiUrl('posts'));

  const posts = data?.posts;

  return { posts, error };
}
