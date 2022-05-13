import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { responsiveTextSize } from 'ui/lib/text'
import { Title } from 'ui/typography'

export const PageHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  padding-bottom: 1.5rem;
`

export const PageTitle = styled(Title)`
  margin-bottom: 0.5rem;
  ${({ theme }) =>
    css`
      color: ${theme.colors.accent};
    `}
`
export const Body = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.textMd};
  `,
  responsiveTextSize('md', 'lg', 'lg'),
)

export const PageDescription = styled(Body)(responsiveTextSize('lg', 'xl'))
