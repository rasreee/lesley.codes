import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const Flex = styled.div(
  css`
    display: flex;
  `,
)

export const SpaceBetweenFlex = styled(Flex)(
  css`
    width: 100%;
    align-items: center;
    justify-content: space-between;
  `,
)
