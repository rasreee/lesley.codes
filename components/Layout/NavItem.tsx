import { cn } from '@lib/classnames';
import { RouteNames, Routes } from '@lib/navigation';
import NextLink from '@ui/components/NextLink';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

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

function NavItem({ href, children }: NavItemProps) {
  const router = useRouter();
  const routeName = getRouteName(href);
  const navName = getRouteName(router.pathname);

  const isActive = routeName === navName;

  return (
    <NextLink href={href} className={cn(isActive ? 'text' : 'text-hint')}>
      <span className="capsize">{children}</span>
    </NextLink>
  );
}

export default NavItem;
