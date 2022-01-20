import { sharedTheme } from './sharedTheme';

export const darkTheme = {
  ...sharedTheme,
  color: {
    background: sharedTheme.colors.gray[900],
    text: sharedTheme.colors.gray[50],
    muted: sharedTheme.colors.gray[800]
  }
};
