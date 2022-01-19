import { cn } from '@lib/classnames';
import { RouteNames, Routes } from '@lib/navigation';

import { Navigation } from './Navigation';
import { NavItemProps } from './NavItem';
import { ThemeSwitch } from './ThemeSwitch';

const navItemProps: NavItemProps[] = Object.keys(RouteNames).map(
  (routeName) => ({
    href: Routes[routeName],
    children: routeName,
  })
);

const Header = () => {
  return (
    <header
      className={cn(
        'flex items-center justify-between',
        'max-w-5xl px-8 mx-auto'
      )}
    >
      <Navigation navItemProps={navItemProps} />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
