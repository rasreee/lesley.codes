import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ContainerProps } from 'lib/react'
import Link from 'next/link'
import { forwardRef } from 'react'
import { clickableStyle } from 'ui/lib/clickable'
import { transitionAll } from 'ui/lib/transition'

import { SVGIconProps } from '../icons/types'

const defaultIconStyle = { height: `1.25em`, right: `1.25em` }

const ArrowRightIcon = ({ style: customStyle, ...restProps }: SVGIconProps) => {
  const props = {
    ...restProps,
    style: { ...defaultIconStyle, ...customStyle },
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const SArrowLink = styled.a(
  css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem;
    cursor: pointer;
  `,
  clickableStyle,
  transitionAll,
)

interface ArrowLinkProps {
  href: string
}

export const ArrowLink = forwardRef(
  (
    { children, href, ...props }: ContainerProps<ArrowLinkProps>,
    ref: React.Ref<HTMLAnchorElement>,
  ) => {
    return (
      <Link href={href} passHref>
        <SArrowLink {...props} ref={ref}>
          {children}
          <ArrowRightIcon />
        </SArrowLink>
      </Link>
    )
  },
)

ArrowLink.displayName = 'ArrowLink'
