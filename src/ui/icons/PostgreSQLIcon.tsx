import styled from '@emotion/styled'
import Image from 'next/image'
import psqlIconSrc from 'public/images/postgresql-logo.svg'
import { defaultIconSizeStyle } from 'ui/icons/styles'

import { defaultIconStyle } from './styles'
import { ImageIconProps } from './types'

export const PostgreSQLIcon = ({
  style: customStyle,
  ...props
}: ImageIconProps) => {
  const style = { ...defaultIconStyle, ...customStyle }
  return (
    <IconContainer {...props} style={style}>
      <Image src={psqlIconSrc} alt="postgresql-logo" />
    </IconContainer>
  )
}

const IconContainer = styled.div(defaultIconSizeStyle)
