import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Nav } from './Nav'

export const Header = () => {
  return (
    <SHeader>
      <Nav />
    </SHeader>
  )
}

const SHeader = styled.header(
  ({ theme }) => css`
    position: sticky;
    top: 0;
    z-index: 50;
    background: ${theme.colors.bg};
  `,
)
