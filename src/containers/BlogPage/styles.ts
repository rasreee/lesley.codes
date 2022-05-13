import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mq } from 'ui/lib/mq'
import { rem } from 'ui/lib/size'

export const FeedSection = styled.section<{ gap?: number }>(
  css`
    display: flex;
    flex-direction: column;
    ${mq({ margin: ['0.75rem 0rem', '1.5rem 0.25rem'] })}
  `,
  ({ gap = 6 }) =>
    css`
      gap: ${rem(gap * 4)};
    `,
)

export const EmptyStateContainer = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  p {
    text-align: left;
  }
`
