import PostFeedPage from '@containers/PostFeedPage';
import PostPage from '@containers/PostPage';
import { getSlugQueryParam, PostFrontmatter } from '@features/blog';
import { listPosts, listPostSlugs } from '@features/blog/api/posts';
import { getPostBySlug } from '@lib/api';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

type PostPageProps = { data: PostFrontmatter | PostFrontmatter[] };

const BlogRoute = ({ data }: PostPageProps) => {
  const router = useRouter();

  if (!('slug' in router.query)) return <PostFeedPage />;

  return <PostPage />;
};

export const getStaticPaths = async () => {
  const slugs = listPostSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: [slug]
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (args) => {
  try {
    if (!args.params) {
      const allPosts = listPosts();
      return { props: { data: allPosts } };
    }

    const slug = getSlugQueryParam(args.params);

    console.log(`👌 Getting Post data for slug=${slug}`);

    const post = getPostBySlug(slug);

    console.log('✅ Got Post front matter: ', post);

    return { props: { data: post } };
  } catch (err) {
    console.log(`❗ERROR: Failed to getStaticProps for /post/[slug]. Error: `, err);

    return { redirect: { destination: '/', permanent: false } };
  }
};

export default BlogRoute;
