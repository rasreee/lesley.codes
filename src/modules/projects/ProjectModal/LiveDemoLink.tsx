import React from 'react'
import { HStack } from 'ui/atoms/stack'
import { ExternalLink } from 'ui/links/ExternalLink'

export interface LiveDemoLinkProps {
  websiteUrl: string
}

export const LiveDemoLink: React.FunctionComponent<LiveDemoLinkProps> = ({
  websiteUrl,
}) => {
  return (
    <ExternalLink href={websiteUrl}>
      <HStack gap={2} alignItems="center">
        <span>View live demo</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          {...{ height: '1.25rem', width: '1.25rem' }}
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </HStack>
    </ExternalLink>
  )
}
