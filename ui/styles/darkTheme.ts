import { sharedTheme } from './sharedTheme';

export const darkTheme = {
  ...sharedTheme,
  color: {
    background: '#000',
    text: sharedTheme.colors.gray[50],
    textHint: sharedTheme.colors.gray[400],
    textHintHover: sharedTheme.colors.gray[100],
    muted: sharedTheme.colors.gray[800]
  }
};
