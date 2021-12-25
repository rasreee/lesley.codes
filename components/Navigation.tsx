import { cn } from 'lib/classnames';
import { RouteNames, Routes } from 'lib/navigation';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import { NavLink } from './NavLink';

const capitalizeFirstLetter = (text: string): string => {
  const firstLetter = text[0];
  const rest = text.slice(1, text.length);

  return `${firstLetter.toUpperCase()}${rest}`;
};

const getRouteName = (pathname: string) => {
  if (pathname === Routes.Home) return RouteNames.Home;

  const basePath = pathname.split('/')[1];
  const pageName = capitalizeFirstLetter(basePath);
  if (pageName in RouteNames) return RouteNames[pageName];
  throw new Error(
    `Failed to get routeName name for pathname ${pathname}. Got ${pageName}.`
  );
};

export interface NavItemProps {
  href: string;
  children: ReactNode;
}

export function NavItem({ href, children }: NavItemProps) {
  const router = useRouter();
  const routeName = getRouteName(href);
  const navName = getRouteName(router.pathname);

  const isActive = routeName === navName;

  return (
    <NavLink href={href} className={cn(isActive ? 'text' : 'text-hint')}>
      <span className="capsize">{children}</span>
    </NavLink>
  );
}

const defaultNavItemProps: NavItemProps[] = Object.keys(RouteNames).map(
  (routeName) => ({
    href: Routes[routeName],
    children: routeName,
  })
);

export interface NavigationProps {
  /**
   * Optional list of NavItem props to map over.
   */
  navItemProps?: NavItemProps[];
}

/**
 * Renders the top navigation bar given a list of NavItemProps.
 */
export const Navigation = ({
  navItemProps = defaultNavItemProps,
}: NavigationProps) => {
  return (
    <nav className="flex gap-6 py-4">
      {navItemProps.map((navItem) => (
        <NavItem key={navItem.href} {...navItem} />
      ))}
    </nav>
  );
};
