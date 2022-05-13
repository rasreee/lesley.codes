import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { SpaceBetweenFlex } from 'ui/atoms/flex'
import { VStack } from 'ui/atoms/stack'
import { ResponsiveCardTitle } from 'ui/card/card'
import { above, only } from 'ui/lib/breakpoints'
import { responsiveGap } from 'ui/lib/space'
import { responsiveTextSize } from 'ui/lib/text'
import { Body } from 'ui/page/page'
import { P } from 'ui/typography'

export const ProjectDetailsContainer = styled.div(
  css`
    display: flex;
    flex-direction: column;
    padding: 1.125rem 1.25rem;
  `,
  css`
    --current-bg: var(--tx-muted);
  `,
  responsiveGap(12, 16, 24),
)

export const Demo = styled.div(
  css`
    display: flex;
    flex-direction: column;
  `,
  responsiveGap(12, 16, 20),
)

export const ModalHeader = styled(SpaceBetweenFlex)`
  ${only('mobile')} {
    align-items: flex-start;
    gap: 0.25rem;
    & .close-button {
      padding-top: 0.5rem;
    }
  }
`

export const ModalTitle = styled(ResponsiveCardTitle)(
  ({ theme }) =>
    css`
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors.text};
    `,
  ({ theme }) => css`
    font-size: ${theme.fontSizes['xl']};
    ${only('tablet')} {
      font-size: ${theme.fontSizes['xl']};
    }
    ${above('tablet')} {
      font-size: ${theme.fontSizes['2xl']};
    }
  `,
)

export const ModalBody = styled(Body)(
  css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.5rem;
  `,
  css`
    overscroll-behavior: none;
  `,
)

export const MetaLabel = styled(P)(
  ({ theme }) => css`
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes['md']};
    font-weight: ${theme.fontWeights.medium};
  `,
)

export const BottomMetaContainer = styled(VStack)(
  css`
    padding-top: 0.75rem;
  `,
)

export const Paragraph = styled(P)(
  responsiveTextSize('lg'),
  ({ theme }) =>
    css`
      color: ${theme.colors.text};
    `,
)
