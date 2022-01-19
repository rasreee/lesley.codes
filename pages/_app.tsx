import 'styles/globals.css';

import { useAnalytics } from '@lib/analytics';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useAnalytics();

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
