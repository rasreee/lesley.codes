import '@styles/global.css';

import Layout from '@components/Layout';
import { ThemeToggleProvider } from '@features/colorMode/ThemeToggleProvider';
import { useAnalytics } from '@lib/analytics';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useAnalytics();

  return (
    <ThemeToggleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeToggleProvider>
  );
};

export default MyApp;
