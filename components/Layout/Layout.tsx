import { cn } from '@lib/classnames';
import { MetaProps } from '@lib/layout';
import React from 'react';

import Header from './Header';
import Seo from './Seo';

type LayoutProps = {
  children: React.ReactNode;
  meta?: MetaProps;
};

export const Layout = ({ children, meta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Seo meta={meta} />
      <Header />

      <main>
        <div className={cn('relative', 'max-w-5xl px-8 py-4 mx-auto')}>
          {children}
        </div>
      </main>
    </>
  );
};
