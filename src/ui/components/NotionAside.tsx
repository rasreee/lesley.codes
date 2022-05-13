import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ContainerFC } from 'lib/react'

const EXCLAMATION_EMOJI = '💡'

interface NotionAsideProps {
  children: string
}

/**
 * TODO: Fix Notion block parsing & rendering of children (i.e. links in text)
 */
export const NotionAside: ContainerFC<NotionAsideProps> = ({ children }) => {
  return (
    <NotionAsideContainer>
      {EXCLAMATION_EMOJI}
      <div className="pr-2">{children}</div>
    </NotionAsideContainer>
  )
}

const NotionAsideContainer = styled.aside`
  ${({ theme }) => css`
    border-radius: ${theme.radii.base};
    background: ${theme.colors.muted};
    padding: 1rem 1.25rem;
    margin: 0.75rem 0;
    display: flex;
    gap: 0.75rem;
  `}
`
