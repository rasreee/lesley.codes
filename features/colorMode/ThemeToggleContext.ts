import { createContext } from 'react';

import { ColorMode } from './types';

export interface IThemeToggleContext {
  colorMode: ColorMode;
  getIsDark: () => boolean;
  toggle: () => void;
}

export const ThemeToggleContext = createContext<IThemeToggleContext | undefined>(undefined);
