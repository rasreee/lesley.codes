import { sharedTheme } from './sharedTheme';

export const lightTheme = {
  ...sharedTheme,
  color: {
    background: sharedTheme.colors.gray[50],
    text: sharedTheme.colors.gray[900],
    muted: sharedTheme.colors.gray[600]
  }
};
