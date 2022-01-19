import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import DateFormatter from '@ui/components/DateFormatter';
import NotionAside from '@ui/components/NotionAside';
import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

import Seo from './Seo';
import { Tags } from './Tags';
import { H2, P } from './Typography';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  NotionAside,
  Seo,
};

export interface BlogPostProps {
  /**
   * Frontmatter of the post
   */
  frontMatter: BlogFrontmatterWithSlug;
  /**
   * Serialized MDX data
   */
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export const BlogPost: React.FunctionComponent<BlogPostProps> = ({
  frontMatter,
  source,
}) => {
  return (
    <article>
      <section className="flex flex-col gap-3 max-w-3xl">
        <H2 size="md:text-4xl">{frontMatter.title}</H2>
        <P color="text-hint" size="text-base">
          {'Published on '}
          <DateFormatter date={frontMatter.publishedAt} />
        </P>
        <Tags tags={frontMatter.tags} />
      </section>
      <section className="prose dark:prose-dark mt-8">
        <MDXRemote {...source} components={components} />
      </section>
    </article>
  );
};
