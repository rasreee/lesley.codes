import { PropsWithChildren, useState } from 'react';

import { ColorModeContext } from './ColorModeContext';
import { ColorMode } from './types';

export const ColorModeProvider = ({
  children,
  initialMode = 'dark'
}: PropsWithChildren<{ initialMode?: ColorMode }>) => {
  const [colorMode, setColorMode] = useState(initialMode);

  const toggle = () => setColorMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));

  return (
    <ColorModeContext.Provider value={{ colorMode, toggle }}>{children}</ColorModeContext.Provider>
  );
};
