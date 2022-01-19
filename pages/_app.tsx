import '@styles/global.css';

import Layout from '@components/Layout';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useAnalytics } from '@lib/analytics';
import { fetcher } from '@lib/fetcher';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SWRConfig, SWRConfiguration } from 'swr';

const defaultSWRConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnMount: false
};

const Shell = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <SWRConfig value={{ fetcher, ...defaultSWRConfig }}>{children}</SWRConfig>
        </Layout>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useAnalytics();

  return (
    <Shell>
      <Component {...pageProps} />
    </Shell>
  );
};

export default MyApp;
