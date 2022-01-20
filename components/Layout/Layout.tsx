import { css } from '@emotion/react';
import styled from '@emotion/styled';
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
        <Container className={classNames('relative', 'max-w-5xl px-8 py-4 mx-auto')}>
          {children}
        </Container>
      </main>
    </>
  );
};

const Container = styled.div`
  height: 95vh;
  ${({ theme }) => css`
    background: ${theme.color.background};
    color: ${theme.color.text};
  `}
`;
