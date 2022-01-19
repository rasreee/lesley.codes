import { GetPostApiResponse } from '@db/posts/getPost';
import DateFormatter from '@ui/components/DateFormatter';
import NotionAside from '@ui/components/NotionAside';
import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import Meta from './Meta';
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
  Meta
};

export const BlogPostView: React.FunctionComponent<GetPostApiResponse> = ({
  frontMatter,
  source
}) => {
  return (
    <article>
      <section className="flex flex-col gap-3 max-w-3xl">
        <H2 size="md:text-4xl">{frontMatter.title}</H2>
        <P color="text-hint" size="text-base">
          {'Published on '}
          <DateFormatter date={frontMatter.createdAt} />
        </P>
        <Tags tags={frontMatter.tags} />
      </section>
      <section className="prose dark:prose-dark mt-8">
        <MDXRemote {...source} components={components} />
      </section>
    </article>
  );
};
