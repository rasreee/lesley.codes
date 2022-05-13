import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { typography } from './typography'

const theme = {
  colors,
  ...typography,
  radii: {
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.625rem',
    '2xl': '0.75rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  breakpoints,
}

export { theme }

type Theme = typeof theme

export type { Theme }
