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

export default NavItem;
