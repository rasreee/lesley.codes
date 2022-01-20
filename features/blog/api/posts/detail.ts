import { ALL_POST_FIELDS, Post } from '@features/blog/models';
import { POSTS_PATH } from '@lib/mdx';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
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

  const mdxSource = await require('next-mdx-remote/serialize').serialize(content, {
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
