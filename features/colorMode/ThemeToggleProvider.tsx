import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '@ui/styles/darkTheme';
import { lightTheme } from '@ui/styles/lightTheme';
import { PropsWithChildren, useState } from 'react';

import { ThemeToggleContext } from './ThemeToggleContext';
import { ColorMode } from './types';

export const ThemeToggleProvider = ({
  children,
  initialMode = 'dark'
}: PropsWithChildren<{ initialMode?: ColorMode }>) => {
  const [colorMode, setColorMode] = useState(initialMode);

  const toggle = () => setColorMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));

  const getIsDark = () => colorMode === 'dark';

  const currentTheme = getIsDark() ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeToggleContext.Provider value={{ colorMode, toggle, getIsDark }}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeProvider>
  );
};
