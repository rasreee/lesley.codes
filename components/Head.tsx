import { AppConfig, WEBSITE_HOST_URL } from 'lib/appConfig';
import { MetaProps } from 'lib/layout';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Head = ({
  customMeta = AppConfig.meta,
}: {
  customMeta?: MetaProps;
}): JSX.Element => {
  const router = useRouter();

  return (
    <NextHead>
      <title>{customMeta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={customMeta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={customMeta.type} />
      <meta property="og:site_name" content={customMeta.title} />
      <meta property="og:description" content={customMeta.description} />
      <meta property="og:title" content={customMeta.title} />
      <meta property="og:image" content={customMeta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rasreee" />
      <meta name="twitter:title" content={customMeta.title} />
      <meta name="twitter:description" content={customMeta.description} />
      <meta name="twitter:image" content={customMeta.image} />
      {customMeta.publishedAt && (
        <meta
          property="article:published_time"
          content={customMeta.publishedAt}
        />
      )}
    </NextHead>
  );
};

export default Head;
