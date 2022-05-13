import { css } from '@emotion/react'
import { above } from 'ui/lib/breakpoints'

import { rem } from './size'
import { StyledProps } from './types'

export interface GapProps {
  gap?: number
}

export const gapStyle = (gap: number) => css`
  gap: ${rem(gap * 4)} !important;
`

export const gapStyledFn = ({ gap = 3 }: StyledProps<GapProps>) => gapStyle(gap)

export const responsiveGap = (...gaps: number[]) =>
  css`
    gap: ${rem(gaps[0])};
    ${above('mobile')} {
      gap: ${rem(gaps[1])};
    }
    ${above('tablet')} {
      gap: ${rem(gaps[2])};
    } ;
  `
