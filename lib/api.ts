import { POSTS_PATH } from '@lib/mdx';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { BlogFrontmatter } from './frontmatter';

export type Fields = readonly string[];

export const ALL_POST_FIELDS = [
  'image',
  'createdAt',
  'description',
  'slug',
  'title',
  'tags'
] as const;

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

export function getPostBySlug(slug: string, fields: Fields = ALL_POST_FIELDS): BlogFrontmatter {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(POSTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {} as BlogFrontmatter;

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

export function getAllPosts(fields: Fields = ALL_POST_FIELDS): BlogFrontmatter[] {
  const slugs = getPostSlugs();

  return slugs.map((slug) => getPostBySlug(slug, fields));
}
