import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { above } from 'ui/lib/breakpoints'

export const OnlyMobile = styled.div`
  visibility: visible;
  display: block;
  ${above('mobile')} {
    visibility: hidden;
    display: none;
  }
`

export const AboveSm = styled.div(css`
  visibility: hidden;
  display: none;
  ${above('mobile')} {
    visibility: visible;
    display: block;
  }
`)
