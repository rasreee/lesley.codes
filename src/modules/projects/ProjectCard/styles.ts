import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { defaultButtonStyle } from 'ui/buttons/styles'
import { baseCardStyle } from 'ui/card/styles'
import { above } from 'ui/lib/breakpoints'
import { responsiveGap } from 'ui/lib/space'
import { lineClamp, responsiveTextSize } from 'ui/lib/text'

export const Container = styled.div(
  defaultButtonStyle,
  baseCardStyle,
  css`
    display: flex;
    flex-direction: column;
  `,
  responsiveGap(14, 16),
)

export const TextCol = styled.div(
  css`
    display: flex;
    flex-direction: column;
    text-align: left;
  `,
  responsiveGap(6, 8),
)

export const DescriptionPreview = styled.span(
  css`
    ${above('mobile')} {
      max-width: 92%;
    }
  `,
  lineClamp(3),
  responsiveTextSize('md', 'lg'),
)

export const TechnologiesMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.125rem;
  margin-bottom: 0.5rem;
  max-width: 100%;
  flex-wrap: wrap;
  ${above('tablet')} {
    min-width: max-content;
  }

  & .technology-meta-icon {
    height: 1.125rem !important;
    width: 1.125rem !important;
  }
`
