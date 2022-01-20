import { sharedTheme } from './sharedTheme';

export const lightTheme = {
  ...sharedTheme,
  color: {
    background: sharedTheme.colors.gray[50],
    text: sharedTheme.colors.gray[900],
    textHint: sharedTheme.colors.gray[600],
    textHintHover: sharedTheme.colors.gray[800],
    muted: sharedTheme.colors.gray[200]
  }
};
