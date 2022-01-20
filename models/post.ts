import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export const ALL_POST_FIELDS = [
  'image',
  'createdAt',
  'description',
  'slug',
  'title',
  'tags'
] as const;

export interface PostFrontmatter extends SearchData {}

export interface Post {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: PostFrontmatter;
}
