import { cn } from '@lib/classnames';

import { Navigation } from './Navigation';
import { ThemeSwitch } from './ThemeSwitch';

const Header = () => {
  return (
    <header
      className={cn(
        'flex items-center justify-between',
        'max-w-5xl px-8 mx-auto'
      )}
    >
      <Navigation />
      <ThemeSwitch />
    </header>
  );
};

export default Header;
