import '@styles/global.css';

import Layout from '@components/Layout';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ColorModeProvider } from '@features/colorMode/ColorModeProvider';
import { useAnalytics } from '@lib/analytics';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const Shell = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles />
        <ColorModeProvider>
          <Layout>{children}</Layout>
        </ColorModeProvider>
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
