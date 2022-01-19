import { AppConfig, WEBSITE_HOST_URL } from '@lib/appConfig';
import { MetaProps } from '@lib/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

interface SeoProps {
  meta?: MetaProps;
}

const Seo = ({ meta = AppConfig.meta }: SeoProps): JSX.Element => {
  const router = useRouter();

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rasreee" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.publishedAt && (
        <meta property="article:published_time" content={meta.publishedAt} />
      )}
    </Head>
  );
};

export default Seo;
