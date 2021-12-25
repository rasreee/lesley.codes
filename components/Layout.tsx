import { cn } from 'lib/classnames';
import { MetaProps } from 'lib/layout';
import React from 'react';

import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />

      <header
        className={cn(
          'flex items-center justify-between',
          'max-w-5xl px-8 mx-auto'
        )}
      >
        <Navigation />
        <ThemeSwitch />
      </header>

      <main>
        <div className={cn('relative', 'max-w-5xl px-8 py-4 mx-auto')}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
