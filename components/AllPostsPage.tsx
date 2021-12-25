import { BlogFrontmatterWithSlug } from 'lib/frontmatter';
import React from 'react';

import Layout from './Layout';
import { SearchablePostFeed } from './SearchablePostFeed';
import { Section } from './Section';
import { H1, P } from './Typography';

export interface AllPostsPageProps {
  posts: BlogFrontmatterWithSlug[];
}

export const AllPostsPage: React.FunctionComponent<AllPostsPageProps> = ({
  posts,
}) => {
  return (
    <Layout customMeta={{ title: 'Blog' }}>
      <Section>
        <H1>{'Blog'}</H1>
        <P>
          {
            'Thoughts and tutorials about web development, product validation, and Solana.'
          }
        </P>
      </Section>
      <Section>
        <SearchablePostFeed posts={posts} />
      </Section>
    </Layout>
  );
};
