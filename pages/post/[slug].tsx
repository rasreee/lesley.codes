import { BlogPostView } from '@components/BlogPostView';
import { ErrorMessage } from '@components/ErrorMessage';
import Meta, { MetaProps } from '@components/Meta';
import { Section } from '@components/Section';
import { H1, P } from '@components/Typography';
import { useRegisterPostView } from '@db/contents/useRegisterPostView';
import { usePostForSlug } from '@db/posts/usePost';
import { AppConfig, WEBSITE_HOST_URL } from '@lib/appConfig';
import { getSlugQueryParam } from '@ui/utils/getSlugQueryParam';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogPost = () => {
  const router = useRouter();

  const [slug, setSlug] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    setSlug(getSlugQueryParam(router.query));
  }, [router.isReady, router.query]);

  const { data: post, error } = usePostForSlug(slug);

  useRegisterPostView(slug);

  const customMeta: MetaProps | undefined = post
    ? {
        title: `${post.frontMatter.title} - Lesley Chang`,
        description: post.frontMatter.description,
        image: `${WEBSITE_HOST_URL}${post.frontMatter.image}`,
        createdAt: post.frontMatter.createdAt,
        type: 'article'
      }
    : undefined;

  return (
    <>
      <Meta {...customMeta} />
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <ErrorMessage>{error?.message}</ErrorMessage>
      {post && <BlogPostView {...post} />}
    </>
  );
};

export default BlogPost;
