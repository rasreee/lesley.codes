import { Theme } from '@ui/styles/theme';

export type StyledProps<P extends {} = {}> = {
  theme: Theme;
} & P;
