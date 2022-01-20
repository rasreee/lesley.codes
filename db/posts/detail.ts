import { POSTS_PATH } from '@lib/mdx';
import { ALL_POST_FIELDS, Post } from '@models/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export interface PostApiResponse extends Post {}

export function getPostFrontmatter(
  slug: string,
  fields: readonly string[] = ALL_POST_FIELDS
): Post['frontMatter'] {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {} as Post['frontMatter'];

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

import mdxPrism from 'mdx-prism';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export async function getPost(
  slug: string,
  fields: readonly string[] = ALL_POST_FIELDS
): Promise<Post> {
  const postFilePath = join(POSTS_PATH, slug);
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
