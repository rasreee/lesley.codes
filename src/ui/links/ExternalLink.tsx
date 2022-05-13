import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ContainerFC } from 'lib/react'
import { HTMLAttributes } from 'react'

export interface ExternalLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const externalLinkProps = { target: '_blank', rel: 'noreferrer' }

export const ExternalLink: ContainerFC<ExternalLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <SAnchor {...props} href={href} {...externalLinkProps}>
      {children}
    </SAnchor>
  )
}

const SAnchor = styled.a(
  ({ theme }) =>
    css`
      font-weight: ${theme.fontWeights.semibold};
    `,
)
