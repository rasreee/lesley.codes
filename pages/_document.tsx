import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/ibm-plex-sans-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link href="/site.webmanifest" rel="manifest" />
        <link rel="preconnect" href="https://cdn.usefathom.com" crossOrigin="" />
      </Head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}