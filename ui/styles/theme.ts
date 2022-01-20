import { darkTheme } from './darkTheme';
import { sharedTheme } from './sharedTheme';

export const defaultTheme = darkTheme;

export type Theme = typeof sharedTheme & typeof defaultTheme;
