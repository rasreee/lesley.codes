import { Post } from '@features/blog/models';
import { WEBSITE_HOST_URL } from '@lib/appConfig';
import Head from 'next/head';
import { useRouter } from 'next/router';

export interface MetaProps
  extends Partial<Pick<Post['frontMatter'], 'createdAt' | 'description' | 'image' | 'title'>> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}

export const Meta = (props: MetaProps): JSX.Element => {
  const router = useRouter();

  return (
    <Head>
      <title>{props.title}</title>
      <meta charSet="UTF-8" />
      <meta name="robots" content="follow, index" />
      <meta content={props.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={props.type} />
      <meta property="og:site_name" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:image" content={props.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rasreee" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
      {props.createdAt && <meta property="article:published_time" content={props.createdAt} />}
    </Head>
  );
};
