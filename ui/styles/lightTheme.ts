import { sharedTheme } from './sharedTheme';

const styles = {
  color: {
    background: sharedTheme.colors.gray[50],
    text: sharedTheme.colors.gray[900],
    muted: sharedTheme.colors.gray[600]
  }
};

export const lightTheme = {
  ...sharedTheme,
  styles
};
