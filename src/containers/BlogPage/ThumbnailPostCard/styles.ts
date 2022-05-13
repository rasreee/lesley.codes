import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  Card,
  cardHoverTransition,
  CardTitle,
  ClampedDescription,
} from 'ui/card'
import { above, only } from 'ui/lib/breakpoints'
import { rem } from 'ui/lib/size'

export const ThumbnailCard = styled(Card)(
  css`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 0.375rem;
    padding-right: 0.375rem;
    ${only('tablet')} {
      gap: 1rem;
    }

    ${above('tablet')} {
      gap: 1.5rem;
    }
    border: none;
  `,
  cardHoverTransition(),
)

export const ThumbnailCardTitle = styled(CardTitle)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    ${only('tablet')} {
      font-size: ${theme.fontSizes['xl']};
    }
    ${above('tablet')} {
      font-size: ${theme.fontSizes['2xl']};
    }
  `,
)

export const ThumbnailCardDescription = styled(ClampedDescription)(
  ({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    ${above('mobile')} {
      font-size: ${theme.fontSizes.lg};
    }
  `,
)

export const thumbnailImageSize = { width: 168, height: 128 }

export const ThumbnailImageContainer = styled.div(
  css`
    min-width: ${rem(thumbnailImageSize.width)};
  `,
  css`
    & img.thumbnail {
      border-radius: 0.5rem;
      flex: 1;
    }
  `,
)

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${only('mobile')} {
    width: 100%;
  }
  & :last-child {
    margin: 0.125rem 0;
  }
`
