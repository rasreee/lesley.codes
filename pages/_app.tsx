import '@styles/global.css';

import Layout from '@components/Layout';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useAnalytics } from '@lib/analytics';
import { isProduction } from '@lib/environment';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import SearchModalProvider from '@ui/components/search/SearchModalProvider';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const DefaultLayout = ({ children }) => {
  return <>{children}</>;
};

const DevOnlyLayout = ({ children }) => {
  return <SearchModalProvider>{children}</SearchModalProvider>;
};

const Shell = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>{children}</Layout>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useAnalytics();

  const AppLayout = isProduction() ? DefaultLayout : DevOnlyLayout;

  return (
    <Shell>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Shell>
  );
};

export default MyApp;
