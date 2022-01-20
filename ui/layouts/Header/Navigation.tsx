import { Anchor, AnchorProps } from '@ui/atoms';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface NavItemProps {
  href: string;
  children: ReactNode;
}

interface NextLinkProps extends Omit<AnchorProps, 'href'> {
  href: string;
}

const NextLink: React.FunctionComponent<NextLinkProps> = ({ href, children, ...props }) => {
  return (
    <Link href={href} passHref>
      <Anchor {...props}>{children}</Anchor>
    </Link>
  );
};

function NavItem({ href, children }: NavItemProps) {
  return (
    <NextLink href={href}>
      <span className="capsize">{children}</span>
    </NextLink>
  );
}

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
