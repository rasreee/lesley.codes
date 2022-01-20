import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { RouteNames, Routes } from '@lib/routes';

import { Navigation, NavItemProps } from './Navigation';
import { ThemeSwitch } from './ThemeSwitch';

const navItemProps: NavItemProps[] = [
  {
    children: RouteNames.HOME,
    href: Routes.HOME
  },
  {
    children: RouteNames.POSTS,
    href: Routes.POSTS
  }
];

export const Header = () => {
  return (
    <SHeader>
      <InnerContent>
        <Navigation navItemProps={navItemProps} />
        <ThemeSwitch />
      </InnerContent>
    </SHeader>
  );
};

const SHeader = styled.header`
  min-width: 100vw !important;
  padding-left: 2rem /* 32px */ !important;
  padding-right: 2rem /* 32px */ !important;
  ${({ theme }) =>
    css`
      background: ${theme.color.background};
      color: ${theme.color.text};
    `};
`;

const InnerContent = styled.div`
  max-width: 64rem /* 1024px */ !important;
  margin-left: auto !important;
  margin-right: auto !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
