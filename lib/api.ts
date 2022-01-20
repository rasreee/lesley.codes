import { ALL_POST_FIELDS, PostFrontmatter } from '@features/blog';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export const postApiKeys = {
  all: ['/api/posts'] as const,
  lists: () => [...postApiKeys.all, 'list'] as const,
  list: (filters = {}) => [...postApiKeys.lists(), filters] as const,
  details: () => [...postApiKeys.all, 'detail'] as const,
  detail: (slug: string) => [...postApiKeys.details(), slug] as const
};

const postsDirectory = join(process.cwd(), 'blog');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export const getPostBySlug = (
  slug: string,
  fields: readonly string[] = ALL_POST_FIELDS
): PostFrontmatter => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {} as PostFrontmatter;

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
};
