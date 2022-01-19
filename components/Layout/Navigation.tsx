import NavItem, { NavItemProps } from './NavItem';

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
