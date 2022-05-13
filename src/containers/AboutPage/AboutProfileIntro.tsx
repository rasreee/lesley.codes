import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ProfileIntroCopy } from 'lib/copy'
import { Body } from 'ui/page/page'
import { SocialLinks } from 'ui/socials/SocialLinks'
import { Title } from 'ui/typography'

export const AboutProfileIntro = () => {
  return (
    <TextCol>
      <Title>{ProfileIntroCopy.heading}</Title>
      <Body>{ProfileIntroCopy.descriptionLongForm}</Body>
      <SocialLinks />
    </TextCol>
  )
}

const TextCol = styled.div(
  css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 0.75rem;
  `,
  css`
    & .social-links-row {
      padding-top: 0.75rem;
    }
  `,
)
