import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import profileImage from 'public/images/profile.png'
import { mq } from 'ui/lib/mq'
import { rem } from 'ui/lib/size'

export const profileImageSizes = {
  sm: 128,
  md: 180,
  lg: 224,
}

export const profileImageSizeRems = [
  profileImageSizes.sm,
  profileImageSizes.md,
  profileImageSizes.lg,
]
  .map(rem)
  .map((v) => `${v} !important`)

const Container = styled.div(
  ({ theme }) => css`
    ${mq({
      maxWidth: profileImageSizeRems,
      maxHeight: profileImageSizeRems,
    })}
    border-radius: ${theme.radii.full};
    overflow: hidden;
  `,
)

export const ProfileImage = () => {
  return (
    <Container className="profile-image-container">
      <Image
        className="profile-image"
        alt="profile-image"
        src={profileImage}
        objectFit="cover"
      />
    </Container>
  )
}
