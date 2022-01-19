import { POSTS_PATH } from '@lib/mdx';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export interface PostApiResponse {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: { [data: string]: any };
}

export const getPost = async (slug: string): Promise<PostApiResponse> => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
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
    frontMatter: data
  };
};
