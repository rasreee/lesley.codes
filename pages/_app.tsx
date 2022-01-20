import '@styles/global.css';

import ThemeToggleProvider from '@features/colorMode/ThemeToggleProvider';
import MainLayout from '@layouts/MainLayout';
import { useAnalytics } from '@lib/analytics';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useAnalytics();

  return (
    <ThemeToggleProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeToggleProvider>
  );
};

export default MyApp;
