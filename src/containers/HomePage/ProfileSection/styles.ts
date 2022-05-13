import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { profileImageSizes } from 'ui/components'
import { above, only } from 'ui/lib/breakpoints'
import { gapStyle } from 'ui/lib/space'

export const ProfileContainer = styled.div(
  css`
    display: flex;
    align-items: center;
    min-height: 54vh;
    ${above('mobile')} {
      padding-bottom: 2.25rem;
      width: 100%;
    }
    ${above('tablet')} {
      gap: 1.5rem;
    }
    ${only('mobile')} {
      gap: 1.5rem;
      flex-direction: column;
      padding-top: 1.5rem;
    }
  `,
)

export const ProfileMainPanel = styled.div(
  css`
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    gap: 1.25rem;
    flex: 1;
    ${only('mobile')} {
      align-items: center;
      padding-left: 0px;
    }
  `,
  css`
    max-width: 100%;
    ${only('tablet')} {
      max-width: auto;
    }
    ${above('tablet')} {
      max-width: 70%;
    }
  `,
)

export const ProfileContent = styled.section(
  css`
    display: flex;
    flex-direction: column;
  `,
  gapStyle(2),
)

export const PageLinksRowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  ${above('mobile')} {
    justify-content: flex-start;
    gap: 1.5rem;
  }
`

export const OutlineLink = styled.a(
  ({ theme }) => css`
    border: 1px solid ${theme.colors.link.idle};
    padding: 0.5rem 1.5rem;
    border-radius: ${theme.radii.md};
  `,
)

export const ProfileImageContainer = styled.div`
  .profile-image-container {
    min-height: ${profileImageSizes.sm}px;
    max-height: ${profileImageSizes.sm}px;
    min-width: ${profileImageSizes.sm}px;
    max-width: ${profileImageSizes.sm}px;
    ${only('tablet')} {
      min-width: ${profileImageSizes.md}px;
      max-width: ${profileImageSizes.md}px;
      min-height: ${profileImageSizes.md}px;
      max-height: ${profileImageSizes.md}px;
    }
    ${above('tablet')} {
      min-width: ${profileImageSizes.lg}px;
      max-width: ${profileImageSizes.lg}px;
      min-height: ${profileImageSizes.lg}px;
      max-height: ${profileImageSizes.lg}px;
    }
  }
`
