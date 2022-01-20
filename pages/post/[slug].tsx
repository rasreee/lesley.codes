import { BlogPostView } from '@components/BlogPostView';
import { ErrorMessage } from '@components/ErrorMessage';
import { Section } from '@components/Section';
import { H1, P } from '@components/Typography';
import { PostApiResponse } from '@db/posts/getPost';
import { AppConfig } from '@lib/appConfig';
import { buildApiUrl } from '@lib/routes';
import { useQuery } from '@lib/useQuery';
import { getSlugQueryParam } from '@ui/utils/getSlugQueryParam';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PostRoute = () => {
  const router = useRouter();

  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) return;
    setSlug(getSlugQueryParam(router.query));
  }, [router.isReady, router.query]);

  const { data: post, error } = useQuery<PostApiResponse>(slug ? buildApiUrl('post', slug) : null);

  return (
    <>
      <Section>
        <H1>{AppConfig.meta.title}</H1>
        <P>{AppConfig.meta.description}</P>
      </Section>
      <ErrorMessage>{error?.message}</ErrorMessage>
      {post && <BlogPostView post={post} />}
    </>
  );
};

export default PostRoute;
