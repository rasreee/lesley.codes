import { cn } from '@lib/classnames';
import { Routes } from '@lib/routes';

import { Navigation } from './Navigation';
import { NavItemProps } from './NavItem';
import { ThemeSwitch } from './ThemeSwitch';

const navItemProps: NavItemProps[] = Routes.map(({ title, path }) => ({
  href: path,
  children: title
}));

const Header = () => {
  return (
    <header className={cn('flex items-center justify-between', 'max-w-5xl px-8 mx-auto')}>
      <Navigation navItemProps={navItemProps} />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
