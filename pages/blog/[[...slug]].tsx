import { AllPostsPage } from '@components/AllPostsPage';
import { BlogPostPage } from '@components/BlogPostPage';
import { getAllPosts } from '@lib/api';
import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import { postFilePaths, POSTS_PATH } from '@lib/mdx';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

interface AllPostsRouteProps {
  posts: BlogFrontmatterWithSlug[];
}

type PostPageProps =
  | {
      source: MDXRemoteSerializeResult;
      frontMatter: BlogFrontmatterWithSlug;
    }
  | AllPostsRouteProps;

const isAllPostsRouteProps = (o: any): o is AllPostsRouteProps => {
  return typeof o === 'object' && 'posts' in o && Array.isArray(o.posts);
};

const BlogRoute = (props: PostPageProps): JSX.Element => {
  if (isAllPostsRouteProps(props)) {
    return <AllPostsPage {...props} />;
  }

  return <BlogPostPage {...props} />;
};

/**
 * Params must be either an empty object or of type { slugs: string[] }
 * where slugs has exactly one item.
 */
export const getStaticProps: GetStaticProps<{ slug: string } | EmptyObject> = async ({
  params
}) => {
  if (!params || !('slug' in params)) {
    const posts = getAllPosts();

    return {
      props: { posts }
    };
  }

  const slug = (params.slug as string[])[0];

  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings]
    },
    scope: data
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [...postFilePaths, '']
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug: [slug] } }));

  return {
    paths,
    fallback: false
  };
};

export default BlogRoute;
