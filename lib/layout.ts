import { BlogFrontmatter } from './frontmatter';

export interface MetaProps
  extends Partial<
    Pick<BlogFrontmatter, 'publishedAt' | 'description' | 'image' | 'title'>
  > {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
