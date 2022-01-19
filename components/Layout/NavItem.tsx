import NextLink from '@ui/components/NextLink';
import { ReactNode } from 'react';

export interface NavItemProps {
  href: string;
  children: ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <NextLink href={href} className={'text-hint active:text'}>
      <span className="capsize">{children}</span>
    </NextLink>
  );
}

export default NavItem;
