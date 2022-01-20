export const ALL_POST_FIELDS = [
  'image',
  'createdAt',
  'description',
  'slug',
  'title',
  'tags'
] as const;

export interface PostFrontmatter extends SearchData {}

type MDXRemoteSerializeResult<TScope = Record<string, unknown>> = {
  /**
   * The compiledSource, generated from next-mdx-remote/serialize
   */
  compiledSource: string;
  /**
   * An arbitrary object of data which will be supplied to the MDX.
   *
   * For example, in cases where you want to provide template variables to the MDX, like `my name is {name}`,
   * you could provide scope as `{ name: "Some name" }`.
   */
  scope?: TScope;
};

export interface Post {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: PostFrontmatter;
}
