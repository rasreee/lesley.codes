import styled from '@emotion/styled'
import { rem } from 'ui/lib/size'
import { SocialLinks } from 'ui/socials/SocialLinks'

const Footer = () => {
  return (
    <SFooter>
      <SocialLinks />
    </SFooter>
  )
}

const verticalPadding = rem(6)

const SFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--bg-sub);
  padding-top: ${verticalPadding};
  padding-bottom: ${verticalPadding};
`

export default Footer
