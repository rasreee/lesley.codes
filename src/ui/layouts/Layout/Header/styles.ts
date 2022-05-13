import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { StyledProps } from 'ui/lib/types'

const dynamicVisible = ({ visible }: StyledProps<{ visible: boolean }>) => {
  if (visible) {
    return css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    `
  } else {
    return css`
      display: none;
    `
  }
}

export const Menu = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  top: 80px;
  left: 0;
  flex-flow: column nowrap;
  background: var(--bg-main);
  padding-top: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  a {
    font-size: 1.375rem;
    padding: 15px 30px;
    transition: 0.3s;
    width: 100%;
  }
  ${dynamicVisible}
`
