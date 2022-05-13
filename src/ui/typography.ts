import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { above, only } from 'ui/lib/breakpoints'

export const P = styled.p`
  ${({ theme }) =>
    css`
      color: ${theme.colors.text};
      opacity: 0.9;
    `}
`

export const Title = styled.h1(
  ({ theme }) =>
    css`
      font-weight: ${theme.fontWeights.extrabold};
      font-size: ${theme.fontSizes['3xl']};
      ${only('tablet')} {
        font-size: ${theme.fontSizes['4xl']};
      }
      ${above('tablet')} {
        font-size: ${theme.fontSizes['5xl']};
      }
    `,
)
