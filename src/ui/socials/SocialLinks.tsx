import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useCallback } from 'react'
import { clickableStyle } from 'ui/lib/clickable'
import { transitionAll } from 'ui/lib/transition'
import { ExternalLink } from 'ui/links/ExternalLink'

import { metadata } from './metadata'

export const SocialLinks = () => {
  const renderLinks = useCallback(
    () => (
      <>
        {Object.entries(metadata.socials).map(([type, { href, icon }]) => (
          <SAnchor key={type} href={href}>
            {icon}
          </SAnchor>
        ))}
      </>
    ),
    [],
  )

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 2rem;
      `}
    >
      {renderLinks()}
    </div>
  )
}

const SAnchor = styled(ExternalLink)(clickableStyle, transitionAll)
