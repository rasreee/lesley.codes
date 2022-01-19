import '@styles/global.css';

import Layout from '@components/Layout';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useAnalytics } from '@lib/analytics';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import SearchModalProvider from '@ui/components/search/SearchModalProvider';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useAnalytics();

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SearchModalProvider>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
