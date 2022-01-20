import { Theme } from '@ui/styles/lightTheme';

export type StyledProps<P extends {} = {}> = {
  theme: Theme;
} & P;
