import { cn } from '@lib/classnames';
import { MetaProps } from '@lib/layout';
import React from 'react';

import { Navigation } from './Navigation';
import Seo from './Seo';
import { ThemeSwitch } from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  meta?: MetaProps;
};

const Layout = ({ children, meta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Seo meta={meta} />
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
