import '@styles/global.css';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useAnalytics } from '@lib/analytics';
import GlobalStyles from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useAnalytics();

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <EmotionThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </EmotionThemeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
