import { rem } from 'ui/lib/size'
import type { BreakpointName } from 'ui/theme/breakpoints'

const breakpointPxScale = [0, 480, 768, 992, 1280, 1536]

const breakpointRemScale = breakpointPxScale.map(rem)

export const minWidths: { [k in BreakpointName]: string } = {
  sm: breakpointRemScale[0],
  md: breakpointRemScale[1],
  lg: breakpointRemScale[2],
  xl: breakpointRemScale[3],
  '2xl': breakpointRemScale[4],
  mobile: breakpointRemScale[0],
  tablet: breakpointRemScale[1],
  desktop: breakpointRemScale[2],
}
export const maxWidths: { [k in BreakpointName]: string } = {
  sm: breakpointRemScale[1],
  md: breakpointRemScale[2],
  lg: breakpointRemScale[3],
  xl: breakpointRemScale[4],
  '2xl': breakpointRemScale[5],
  mobile: breakpointRemScale[1],
  tablet: breakpointRemScale[2],
  desktop: breakpointRemScale[3],
}

export function below(bp: BreakpointName) {
  return `@media screen and (max-width: ${maxWidths[bp]})`
}

export function above(bp: BreakpointName) {
  return `@media screen and (min-width: ${maxWidths[bp]})`
}

export function only(bp: BreakpointName) {
  return `@media screen and (min-width: ${minWidths[bp]}) and (max-width: ${maxWidths[bp]})`
}
