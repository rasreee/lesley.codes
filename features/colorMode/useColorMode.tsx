import { useContext } from 'react';

import { IThemeToggleContext, ThemeToggleContext } from './ThemeToggleContext';

export function useColorMode(): IThemeToggleContext {
  const context = useContext(ThemeToggleContext);

  if (!context) throw new Error();

  return context;
}
