import classNames from 'classnames';
import React from 'react';

import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <div className={classNames('relative', 'max-w-5xl px-8 py-4 mx-auto')}>{children}</div>
      </main>
    </>
  );
};
