import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ContainerFC } from 'lib/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { clickableStyle } from 'ui/lib/clickable'
import { transitionAll } from 'ui/lib/transition'

const Anchor = styled.a<{ isActive?: boolean }>(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: ${theme.radii.md};
    padding: 0.5rem 1.5rem;
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.medium};
  `,
  ({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.colors.link.active};
      font-weight: ${theme.fontWeights.semibold};
    `,
  clickableStyle,
  transitionAll,
)

export interface NavLinkProps {
  href: string
  onClick?: () => void
}

export const NavLink: ContainerFC<NavLinkProps> = ({
  href,
  children,
  ...props
}) => {
  const router = useRouter()

  const getIsActive = (href: string) => {
    return router.asPath === href
  }
  return (
    <Link href={href} passHref>
      <Anchor {...props} isActive={getIsActive(href)}>
        {children}
      </Anchor>
    </Link>
  )
}
