import { useRegisterPostView } from '@db/contents/useRegisterPostView';
import { WEBSITE_HOST_URL } from '@lib/appConfig';
import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import { MetaProps } from '@lib/layout';
import { useRouter } from 'next/router';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

import { BlogPost } from './BlogPost';
import Layout from './Layout';

const getSlug = (query: ParsedUrlQuery) => {
  if ('slug' in query) {
    return query.slug as string;
  }

  throw new Error('query object does not have property slug');
};

export interface BlogPostPageProps {
  frontMatter: BlogFrontmatterWithSlug;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export const BlogPostPage: React.FunctionComponent<BlogPostPageProps> = ({
  frontMatter,
  source,
}) => {
  const router = useRouter();
  useRegisterPostView(getSlug(router.query));

  const customMeta: MetaProps = {
    title: `${frontMatter.title} - Lesley Chang`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    publishedAt: frontMatter.publishedAt,
    type: 'article',
  };

  return (
    <Layout meta={customMeta}>
      <BlogPost source={source} frontMatter={frontMatter} />
    </Layout>
  );
};
