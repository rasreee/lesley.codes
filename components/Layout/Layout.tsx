import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
    </>
  );
};

const Main = styled.main`
  min-height: 100vh !important;
  min-width: 100vw !important;
  overflow: auto;
  padding: 0;
  margin: 0;
  position: relative;

  ${({ theme }) => css`
    background: ${theme.color.background};
    color: ${theme.color.text};
  `}
`;

const Container = styled.div`
  min-height: 100vh !important;
  min-width: 100vw !important;

  ${({ theme }) => css`
    background: none;
    max-width: 64rem /* 1024px */ !important;

    padding-left: 2rem /* 32px */ !important;
    padding-right: 2rem /* 32px */ !important;
    padding-top: 1rem /* 16px */ !important;
    padding-bottom: 1rem /* 16px */ !important;
    margin-left: auto !important;
    margin-right: auto !important;
  `}
`;
