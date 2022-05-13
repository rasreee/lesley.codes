import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mq } from 'ui/lib/mq'

export const DynamicGrid = styled.div<{ gap?: number }>(
  css`
    display: grid;
  `,
  ({}) =>
    css`
      ${mq({
        gridTemplateColumns: [
          'repeat(1, minmax(0, 1fr))',
          'repeat(1, minmax(0, 1fr))',
          'repeat(3, minmax(0, 1fr))',
        ],
        columnGap: [null, null, '1.5rem'],
        rowGap: ['0.75rem', '1rem', '1.5rem'],
      })}
    `,
)
