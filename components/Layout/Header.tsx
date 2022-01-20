import { RouteNames, Routes } from '@lib/routes';
import classNames from 'classnames';

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
    <header className={classNames('flex items-center justify-between', 'max-w-5xl px-8 mx-auto')}>
      <Navigation navItemProps={navItemProps} />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
