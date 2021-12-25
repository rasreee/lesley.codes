import Layout from 'components/Layout';
import { NavLink } from 'components/NavLink';
import { SearchablePostFeed } from 'components/SearchablePostFeed';
import { Section } from 'components/Section';
import { H1, P } from 'components/Typography';
import { getAllPosts } from 'lib/api';
import { AppConfig } from 'lib/appConfig';
import { BlogFrontmatterWithSlug } from 'lib/frontmatter';
import { GetStaticProps } from 'next';
import React from 'react';

type IndexProps = {
  posts: BlogFrontmatterWithSlug[];
};

const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout customMeta={AppConfig.meta}>
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <Section>
        <SearchablePostFeed posts={posts} />
      </Section>
      <Section>
        <NavLink href="/blog" className="flex mt-8">
          Read all posts
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </NavLink>
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default Index;
