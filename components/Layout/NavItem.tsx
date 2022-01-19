import { cn } from '@lib/classnames';
import { getRouteTitle } from '@lib/routes';
import NextLink from '@ui/components/NextLink';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export interface NavItemProps {
  href: string;
  children: ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  const router = useRouter();
  const currentRouteTitle = getRouteTitle(href);
  const navItemTitle = getRouteTitle(router.pathname);

  const isActive = currentRouteTitle === navItemTitle;

  return (
    <NextLink href={href} className={cn(isActive ? 'text' : 'text-hint')}>
      <span className="capsize">{children}</span>
    </NextLink>
  );
}

export default NavItem;
