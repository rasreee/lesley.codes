import { AppConfig } from 'lib/AppConfig'
import Head from 'next/head'

export interface MetaProps {
  title?: string
  description?: string
  image?: string
  date?: string
  type?: string
}

export const Meta = ({
  type = 'website',
  title = AppConfig.title,
  description = AppConfig.description,
  image = AppConfig.preview
}: MetaProps) => {
  return (
    <Head>
      <meta httpEquiv="" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="description" content={description} />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#0370F3" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <link rel="apple-touch-icon" sizes="180x180" href={AppConfig.appleTouchIcon} />
      <link rel="mask-icon" href={AppConfig.safariPinnedTab} color="#0370F3" />
      <link rel="icon" type="image/png" sizes="32x32" href={AppConfig.favIcon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={AppConfig.favIcon16} />
      <link rel="shortcut icon" href={AppConfig.favIcon} />
      <title>{title}</title>
    </Head>
  )
}
