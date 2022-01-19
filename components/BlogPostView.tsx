import { useRegisterPostView } from '@db/contents/useRegisterPostView';
import { GetPostApiResponse } from '@db/posts/getPost';
import { WEBSITE_HOST_URL } from '@lib/appConfig';
import DateFormatter from '@ui/components/DateFormatter';
import NotionAside from '@ui/components/NotionAside';
import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

import Meta, { MetaProps } from './Meta';
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

export const BlogPostView: React.FunctionComponent<{ post: GetPostApiResponse }> = ({ post }) => {
  useRegisterPostView(post.frontMatter.slug);

  const customMeta: MetaProps = {
    title: `${post.frontMatter.title} - Lesley Chang`,
    description: post.frontMatter.description,
    image: `${WEBSITE_HOST_URL}${post.frontMatter.image}`,
    createdAt: post.frontMatter.createdAt,
    type: 'article'
  };

  return (
    <>
      <Meta {...customMeta} />
      <article>
        <section className="flex flex-col gap-3 max-w-3xl">
          <H2 size="md:text-4xl">{post.frontMatter.title}</H2>
          <P color="text-hint" size="text-base">
            {'Published on '}
            <DateFormatter date={post.frontMatter.createdAt} />
          </P>
          <Tags tags={post.frontMatter.tags} />
        </section>
        <section className="prose dark:prose-dark mt-8">
          <MDXRemote {...post.source} components={components} />
        </section>
      </article>
    </>
  );
};
