import Link from 'next/link'
import { ProfileImage } from 'ui/components'

import { PageSection } from '../PageSection'
import { HomeProfileIntro } from './HomeProfileIntro'
import {
  OutlineLink,
  PageLinksRowContainer,
  ProfileContainer,
  ProfileContent,
  ProfileImageContainer,
  ProfileMainPanel,
} from './styles'

const PageLinksRow = () => (
  <PageLinksRowContainer>
    <Link href="/about" passHref>
      <OutlineLink>Learn more</OutlineLink>
    </Link>
    <Link href="/blog" passHref>
      <OutlineLink>Read blog</OutlineLink>
    </Link>
  </PageLinksRowContainer>
)

const ProfileSection = () => {
  return (
    <PageSection>
      <ProfileContainer>
        <ProfileImageContainer>
          <ProfileImage />
        </ProfileImageContainer>
        <ProfileMainPanel>
          <ProfileContent>
            <HomeProfileIntro />
          </ProfileContent>
          <PageLinksRow />
        </ProfileMainPanel>
      </ProfileContainer>
    </PageSection>
  )
}

export { ProfileSection }
