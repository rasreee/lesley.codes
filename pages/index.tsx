import Layout from '@components/Layout';
import { SearchablePostFeed } from '@components/SearchablePostFeed';
import { Section } from '@components/Section';
import { H1, P } from '@components/Typography';
import { getAllPosts } from '@lib/api';
import { AppConfig } from '@lib/appConfig';
import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import NextLink from '@ui/components/NextLink';
import RightArrowIcon from '@ui/icons/RightArrowIcon';
import { GetStaticProps } from 'next';

type IndexProps = {
  posts: BlogFrontmatterWithSlug[];
};

const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <Section>
        <SearchablePostFeed posts={posts} />
      </Section>
      <Section>
        <NextLink href="/blog" className="flex mt-8">
          Read all posts
          <RightArrowIcon />
        </NextLink>
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
