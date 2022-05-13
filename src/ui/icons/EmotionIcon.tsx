import styled from '@emotion/styled'
import Image from 'next/image'
import emotionIconSrc from 'public/images/emotion-logo.png'

import { defaultIconSizeProps } from './styles'
import { ImageIconProps } from './types'

export const EmotionIcon = ({
  style,
  imageProps,
  ...props
}: ImageIconProps) => {
  return (
    <ImageIconContainer style={style} {...props}>
      <Image
        src={emotionIconSrc}
        alt="emotion-logo"
        className="emotion-logo"
        {...imageProps}
      />
    </ImageIconContainer>
  )
}

const ImageIconContainer = styled.div`
  height: ${defaultIconSizeProps.height};
  width: ${defaultIconSizeProps.width};
`
