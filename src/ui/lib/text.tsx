import { css } from '@emotion/react'
import { above } from 'ui/lib/breakpoints'
import { StyledFn } from 'ui/lib/types'
import { FontSize } from 'ui/theme'

export const responsiveTextSize =
  (...sizes: FontSize[]): StyledFn =>
  ({ theme }) =>
    css`
      font-size: ${theme.fontSizes[sizes[0]]};
      ${sizes.length >= 1 &&
      css`
        ${above('mobile')} {
          font-size: ${theme.fontSizes[sizes[1]]};
        }
      `}
      ${sizes.length >= 2 &&
      css`${above('tablet')} {
      font-size: ${theme.fontSizes[sizes[2]]};
    }}`}
    `

export const lineClamp = (n: number) =>
  css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${n};
  `
