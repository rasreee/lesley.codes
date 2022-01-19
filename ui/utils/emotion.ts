import { Theme } from '@styles/theme';

export type StyledProps<P extends {} = {}> = {
  theme: Theme;
} & P;
