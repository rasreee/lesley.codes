/* eslint-disable jsx-a11y/anchor-is-valid */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useBoolean } from 'lib/hooks/useBoolean'
import { useIsMobile } from 'lib/hooks/useIsMobile'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { pseudo } from 'ui/lib/pseudo'

import { Logo } from './Logo'
import { NavLink } from './NavLink'
import { Menu } from './styles'

interface MenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: ReturnType<typeof useBoolean>[1]
}

const navLinks: INavLink[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Projects', href: '/projects' },
]

export interface INavLink {
  title: string
  href: string
}

const NavLinks: React.FC<{
  navLinks: INavLink[]
  onLinkClick?: () => void
}> = ({ navLinks, onLinkClick }) => {
  return (
    <>
      {navLinks.map((link) => (
        <NavLink
          onClick={() => onLinkClick && onLinkClick()}
          href={link.href}
          key={link.title}
        >
          {link.title}
        </NavLink>
      ))}
    </>
  )
}

const DefaultNav: React.FC<MenuProps> = () => <NavLinks navLinks={navLinks} />

const MenuIcon = dynamic(() => import('./MenuIcon'))
const XIcon = dynamic(() => import('./XIcon'))

const MenuToggle = ({
  onClick,
  isOpen,
}: {
  onClick: () => void
  isOpen: boolean
}) => {
  return (
    <SButton onClick={onClick}>{isOpen ? <MenuIcon /> : <XIcon />}</SButton>
  )
}

const SButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    color: ${theme.colors.hint};
    svg {
      height: 1.5em;
      width: 1.5em;
    }
  `}
  ${({ theme }) =>
    css`
      color: ${theme.colors.hintDark};
      ${pseudo(`_hover`)} {
        color: ${theme.colors.text};
        font-weight: var(--fw-semibold);
      }
    `}
`

const MobileNav: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <MenuToggle isOpen={isMenuOpen} onClick={setIsMenuOpen.on} />
      <Menu visible={isMenuOpen}>
        <NavLinks navLinks={navLinks} onLinkClick={setIsMenuOpen.off} />
      </Menu>
    </>
  )
}

const NavLogoLink: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <Link href="/" passHref>
      <a
        css={css`
          padding: 0.75rem 0;
        `}
        onClick={props.onClick}
      >
        <Logo />
      </a>
    </Link>
  )
}

export const Nav: React.FC = () => {
  const renderNav = (isMobile: boolean, getMenuProps: () => MenuProps) => {
    if (isMobile) return <MobileNav {...getMenuProps()} />

    return <DefaultNav {...getMenuProps()} />
  }

  const isMobile = useIsMobile()

  const [isMenuOpen, setIsMenuOpen] = useBoolean()

  const getMenuProps = () => ({ isMenuOpen, setIsMenuOpen })

  return (
    <Container className="container">
      <NavLogoLink onClick={setIsMenuOpen.off} />
      <NavRight>{renderNav(isMobile, getMenuProps)}</NavRight>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  align-items: center;
`

const NavRight = styled.div`
  display: flex;
  align-items: center;
`
