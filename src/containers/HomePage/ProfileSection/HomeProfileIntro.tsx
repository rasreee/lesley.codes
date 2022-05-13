import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ProfileIntroCopy } from 'lib/copy'
import { above, only } from 'ui/lib/breakpoints'
import { PageDescription } from 'ui/page/page'
import { SocialLinks } from 'ui/socials/SocialLinks'
import { Title } from 'ui/typography'

export const HomeProfileIntro = () => {
  return (
    <TextCol>
      <Title>{ProfileIntroCopy.heading}</Title>
      <SocialLinks />
      <SPageDescription>{ProfileIntroCopy.description}</SPageDescription>
    </TextCol>
  )
}

const TextCol = styled.div(
  css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 0.75rem;
    ${above('mobile')} {
      align-items: flex-start;
    }
  `,
  css`
    & .social-links-row {
      padding-top: 0.5rem;
      gap: 1.5rem;
    }

    & .social-link > svg {
      height: 1.375rem;
      width: 1.375rem;
      ${only('tablet')} {
        height: 1.5rem;
        width: 1.5rem;
      }
      ${above('tablet')} {
        height: 1.625rem;
        width: 1.625rem;
      }
    }
  `,
)

const SPageDescription = styled(PageDescription)`
  ${only('mobile')} {
    text-align: center;
  }
`
