import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { RouteNames, Routes } from '@lib/routes';

import { Navigation } from './Navigation';
import { NavItemProps } from './NavItem';
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

const Header = () => {
  return (
    <SHeader>
      <Navigation navItemProps={navItemProps} />
      <ThemeSwitch />
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 64rem /* 1024px */ !important;
  padding-left: 2rem /* 32px */ !important;
  padding-right: 2rem /* 32px */ !important;
  margin-left: auto !important;
  margin-right: auto !important;

  ${({ theme }) =>
    css`
      background: ${theme.color.background};
      color: ${theme.color.text};
    `};
`;

export default Header;
