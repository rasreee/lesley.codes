import { sharedTheme } from './sharedTheme';

export const darkTheme = {
  ...sharedTheme,
  color: {
    background: '#000',
    text: sharedTheme.colors.gray[50],
    muted: sharedTheme.colors.gray[800]
  }
};