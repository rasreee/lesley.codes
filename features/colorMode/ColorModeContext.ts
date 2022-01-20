import { createContext } from 'react';

import { ColorMode } from './types';

export interface IColorModeContext {
  colorMode: ColorMode;
  toggle: () => void;
}

export const ColorModeContext = createContext<IColorModeContext | undefined>(undefined);
