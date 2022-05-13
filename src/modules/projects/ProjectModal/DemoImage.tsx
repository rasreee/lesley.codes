import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Image, { StaticImageData } from 'next/image'
import { rem } from 'ui/lib/size'

export const DemoImage: React.FC<{ src: StaticImageData | string }> = ({
  src,
}) => {
  return (
    <RoundedImageContainer>
      <Image
        src={src}
        className="card-header-image"
        alt="card-header-image"
        objectFit="cover"
      />
    </RoundedImageContainer>
  )
}

const thumbnailSize = { height: 300 }

const RoundedImageContainer = styled.div(
  css`
    width: 100%;
    min-width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    max-height: ${rem(thumbnailSize.height)};
    &.card-header-image {
      height: ${rem(thumbnailSize.height)};
    }
  `,
  ({ theme }) =>
    css`
      border-radius: ${theme.radii.md};
    `,
)
