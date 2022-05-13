import { css } from '@emotion/react'

export const transitionAll = css`
  transition-property: background-color, border-color, color, fill, stroke,
    font-weight, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`
