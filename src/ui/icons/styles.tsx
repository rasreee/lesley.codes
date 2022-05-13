import { css } from '@emotion/react'
import { above } from 'ui/lib/breakpoints'

const sizeStyle = css`
  height: 1.25rem;
  width: 1.25rem;
  ${above('mobile')} {
    height: 1.5rem;
    width: 1.5rem;
  }
`

export const defaultIconSizeStyle = css`
  ${sizeStyle}

  svg {
    ${sizeStyle}
  }
`
export const defaultIconSizeProps = {
  id: 'icon',
  height: '1.5em',
  width: '1.5em',
}

export const defaultIconStyle = { height: '1.5em', width: '1.5em' }
