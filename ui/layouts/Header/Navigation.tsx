import styled from '@emotion/styled';
import NextLink from '@ui/components/NextLink';
import { baseTextStyles } from '@ui/components/Typography';
import { ReactNode } from 'react';

export interface NavItemProps {
  href: string;
  children: ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <SNextLink href={href}>
      <span className="capsize">{children}</span>
    </SNextLink>
  );
}

const SNextLink = styled(NextLink)`
  ${baseTextStyles}
`;

interface NavigationProps {
  /**
   * Optional list of NavItem props to map over.
   */
  navItemProps: NavItemProps[];
}

/**
 * Renders the top navigation bar given a list of NavItemProps.
 */
export const Navigation = ({ navItemProps }: NavigationProps) => {
  return (
    <nav className="flex gap-6 py-4">
      {navItemProps.map((navItem) => (
        <NavItem key={navItem.href} {...navItem} />
      ))}
    </nav>
  );
};
