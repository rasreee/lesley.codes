import { sharedTheme } from './sharedTheme';

const styles = {
  color: {
    background: sharedTheme.colors.gray[900],
    text: sharedTheme.colors.gray[50],
    muted: sharedTheme.colors.gray[800]
  }
};
export const darkTheme = {
  ...sharedTheme,
  styles
};
