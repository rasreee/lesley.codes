import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CodeSandboxIcon } from 'ui/icons/CodeSandboxIcon'
import { GithubIcon } from 'ui/icons/GithubIcon'
import { NPMIcon } from 'ui/icons/NPMIcon'
import { pseudo } from 'ui/lib/pseudo'
import { transitionAll } from 'ui/lib/transition'
import { ExternalLink } from 'ui/links/ExternalLink'
function capitalizeFirstLetter(s: string): string {
  if (!s) return s
  const first = s.charAt(0).toUpperCase()
  const rest = s.length > 1 ? s.substring(1) : ''

  return `${first}${rest}`
}

const icons = {
  github: GithubIcon,
  codeSandbox: CodeSandboxIcon,
  npm: NPMIcon,
}

function renderIcon(type: string): JSX.Element {
  const Icon = icons[type as keyof typeof icons]

  return <Icon style={{ height: '1rem', width: '1rem' }} />
}

function formatLinkType(type: string): string {
  if (type === 'npm') return 'NPM'

  return capitalizeFirstLetter(type)
}

export const ProjectLinks: React.FC<{
  links: { github: string; codeSandbox?: string }
}> = ({ links }) => {
  return (
    <Row>
      {Object.entries(links).map(([type, href]) => (
        <ProjectLink key={type} href={href}>
          {renderIcon(type)}
          <span className="project-link-text">{` ${formatLinkType(
            type,
          )}`}</span>
        </ProjectLink>
      ))}
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`

const ProjectLink = styled(ExternalLink)(
  css`
    display: flex;
    align-items: center;
    gap: 0.375rem;
  `,
  ({ theme }) => css`
    color: ${theme.colors.hint};
    & .project-link-text {
      font-size: 14px;
      font-weight: ${theme.fontWeights.medium};
      line-height: 1;
    }
    ${pseudo('_hover')} {
      color: ${theme.colors.text};
    }
    & .cutout {
      fill: var(--current-bg);
    }
  `,

  transitionAll,
)
