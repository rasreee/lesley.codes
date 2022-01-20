import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PostApiResponse } from '@features/blog/api/posts';
import { H2, P } from '@ui/atoms';
import DateFormatter from '@ui/components/DateFormatter';
import NotionAside from '@ui/components/NotionAside';
import { Tags } from '@ui/components/Tags';
import { Meta } from '@ui/layouts/Meta';
import { largerThan } from '@ui/utils';
import Head from 'next/head';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

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

export const BlogPostView: React.FunctionComponent<{ post: PostApiResponse }> = ({ post }) => {
  return (
    <>
      <article>
        <section className="flex flex-col gap-3 max-w-3xl">
          <SH2>{post.frontMatter.title}</SH2>
          <SP>
            {'Published on '}
            <DateFormatter date={post.frontMatter.createdAt} />
          </SP>
          <Tags tags={post.frontMatter.tags} />
        </section>
        <section className="prose dark:prose-dark mt-8">
          <MDXRemote {...post.source} components={components} />
        </section>
      </article>
    </>
  );
};

const SH2 = styled(H2)`
  ${({ theme }) => css`
    ${largerThan('mobile')} {
      font-size: ${theme.fontSizes['4xl']};
    }
  `}
`;

const SP = styled(P)`
  ${({ theme }) =>
    css`
      color: ${theme.color.textHint};
    `}
`;
