export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
  '2xl': 1536,
  mobile: 480,
  tablet: 768,
  desktop: 992,
} as const

export const breakpointNames = [
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  'mobile',
  'tablet',
  'desktop',
]

export type BreakpointName = keyof typeof breakpoints
