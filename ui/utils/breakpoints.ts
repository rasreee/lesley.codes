export interface BaseBreakpointConfig {
  base: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl'?: string;
  [key: string]: string | undefined;
}

/**
 * Breakpoints for responsive design
 */
const Breakpoints = {
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
};

export const breakpoints = [
  Breakpoints.base,
  Breakpoints.sm,
  Breakpoints.md,
  Breakpoints.lg,
  Breakpoints.xl
];

export const minWidths = {
  sm: breakpoints[0],
  md: breakpoints[1],
  lg: breakpoints[2],
  mobile: breakpoints[0],
  tablet: breakpoints[1],
  desktop: breakpoints[2]
};

export const maxWidths = {
  sm: breakpoints[1],
  md: breakpoints[2],
  lg: breakpoints[3],
  mobile: breakpoints[1],
  tablet: breakpoints[2],
  desktop: breakpoints[3]
};

export const BreakpointAliass = {
  sm: below(maxWidths.sm),
  md: above(maxWidths.sm),
  lg: above(maxWidths.md),
  mobile: below(minWidths.md),
  tablet: above(minWidths.md),
  desktop: above(maxWidths.md)
};
export type BreakpointAlias = 'sm' | 'md' | 'lg' | 'mobile' | 'tablet' | 'desktop';

export function below(bp: string) {
  return `@media screen and (max-width: ${bp})`;
}

export function smallerThan(bp: BreakpointAlias) {
  return `@media screen and (max-width: ${maxWidths[bp]})`;
}

export function between(min: string, max: string) {
  return `@media screen and (min-width: ${min}) and (max-width: ${max})`;
}

export function above(bp: string) {
  return `@media screen and (min-width: ${bp})`;
}

export function largerThan(bp: BreakpointAlias) {
  return `@media screen and (min-width: ${maxWidths[bp]})`;
}

export function only(bp: BreakpointAlias) {
  return `@media screen and (min-width: ${minWidths[bp]}) and (max-width: ${maxWidths[bp]})`;
}
