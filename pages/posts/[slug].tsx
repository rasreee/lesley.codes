import { BlogPostPage } from '@components/BlogPostPage';
import { BlogFrontmatterWithSlug } from '@lib/frontmatter';
import { postFilePaths, POSTS_PATH } from '@lib/mdx';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

type BlogPostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: BlogFrontmatterWithSlug;
};

const BlogRoute = (props: BlogPostPageProps): JSX.Element => {
  return <BlogPostPage {...props} />;
};

/**
 * Params must be either an empty object or of type { slugs: string[] }
 * where slugs has exactly one item.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { redirect: { destination: '/', permanent: false } };

  const slug = (params as { slug: string }).slug;

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
