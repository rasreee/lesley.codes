import { css } from '@emotion/react'
import { pseudo } from 'ui/lib/pseudo'
import { StyledFn } from 'ui/lib/types'

export const clickableStyle: StyledFn = ({ theme }) => css`
  color: ${theme.colors.hintMd};
  ${pseudo(`_hover`)} {
    color: ${theme.colors.text};
  }
  ${pseudo(`_active`)} {
    color: #fff;
  }
`
