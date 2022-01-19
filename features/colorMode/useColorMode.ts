import { useTheme as useNextTheme } from 'next-themes';

import { ColorMode } from './types';

export function useColorMode(): ColorMode {
  const { theme: nextTheme } = useNextTheme();

  const colorMode = (nextTheme ?? 'dark') as ColorMode;

  return colorMode;
}
