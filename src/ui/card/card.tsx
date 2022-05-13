import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { above } from 'ui/lib/breakpoints'
import { lineClamp } from 'ui/lib/text'

import { baseCardStyle } from './styles'

export const Card = styled.div(baseCardStyle)

export const CardTitle = styled.div(
  lineClamp(1),
  ({ theme }) => css`
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes['xl']};
    ${above('tablet')} {
      font-size: ${theme.fontSizes['2xl']};
    }
  `,
)

export const ClampedDescription = styled.span(
  lineClamp(2),
  css`
    margin-top: 5px;
    margin-bottom: 0.125rem;
  `,
  ({ theme }) =>
    css`
      color: ${theme.colors.textMd};
    `,
)

export const ResponsiveCardTitle = styled.div(
  ({ theme }) => css`
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.semibold};
    font-size: ${theme.fontSizes['xl']};
    ${above('tablet')} {
      font-size: ${theme.fontSizes['2xl']};
    }
  `,
)
