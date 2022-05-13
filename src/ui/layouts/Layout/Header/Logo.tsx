import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import logoImage from 'public/logo/text.svg'
import { mq } from 'ui/lib/mq'
import { rem } from 'ui/lib/size'

const wobble = keyframes`
  25% {
    transform: rotate(8deg);
  }
  50% {
    transform: rotate(-8deg);
  }
  75% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const logoSize = {
  sm: 72,
  md: 80,
  lg: 88,
}

const logoSizes = [logoSize.sm, logoSize.md, logoSize.lg].map(rem)

const LogoContainer = styled.div`
  ${mq({
    height: logoSizes,
    width: logoSizes,
  })}

  & img.logo-image:focus,
  img.logo-image:hover {
    animation: ${wobble} 1s 1;
    ${mq({
      height: logoSizes,
      width: logoSizes,
    })}
  }
`

export const Logo = () => {
  return (
    <LogoContainer>
      <Image className="logo-image" src={logoImage} alt="logo" />
    </LogoContainer>
  )
}
