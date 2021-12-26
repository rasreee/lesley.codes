import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <script
            src="https://cdn.usefathom.com/script.js"
            data-site={process.env.NEXT_PUBLIC_FATHOM_SITE_ID}
            data-canonical="false"
            defer
          ></script>
        </Head>
        <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
