import { useContext } from 'react';

import { ColorModeContext, IColorModeContext } from './ColorModeContext';

export function useColorMode(): IColorModeContext {
  const context = useContext(ColorModeContext);

  if (!context) throw new Error();

  return context;
}
