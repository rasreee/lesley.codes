import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { GapProps, gapStyledFn } from 'ui/lib/space'
import { StyledProps } from 'ui/lib/types'

export interface AlignItemsProps {
  alignItems?: string
}

export type StackProps = GapProps & AlignItemsProps
export const alignItemsStyledFn = ({
  alignItems = 'flex-start',
}: StyledProps<AlignItemsProps>) => css`
  align-items: ${alignItems};
`

export const HStack = styled.div<StackProps>(
  css`
    display: flex;
  `,
  alignItemsStyledFn,
  gapStyledFn,
)

export const VStack = styled.div<StackProps>(
  css`
    display: flex;
    flex-direction: column;
  `,
  alignItemsStyledFn,
  gapStyledFn,
)
