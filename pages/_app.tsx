import '@ui/styles/global.css';

import ThemeToggleProvider from '@features/colorMode/ThemeToggleProvider';
import { useAnalytics } from '@lib/analytics';
import MainLayout from '@ui/layouts/MainLayout';
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
