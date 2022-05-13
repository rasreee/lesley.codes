import { css } from '@emotion/react'

export const cardHoverTransition = (vertical?: boolean) => css`
  transition: transform 500ms;
  &:hover {
    transform: ${vertical ? `translateY(-0.5rem)` : `translateX(-0.75rem)`};
  }
`

export const baseCardStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: 1rem;
  border-radius: var(--radii-md);
  border: 1px solid var(--tx-hint-dark);

  color: var(--tx-text);

  &.card-title {
    color: var(--tx-text);
  }

  &.card-description {
    color: var(--tx-text-md);
    text-align: left;
  }
`
