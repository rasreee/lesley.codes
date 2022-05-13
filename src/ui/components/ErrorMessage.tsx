import { ContainerFC } from 'lib/react'

import { SVGIconProps } from '../icons/types'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    margin: '0.5rem 0',
    color: '#ef4444',
    fontSize: '16px',
  },
  icon: { height: '1.25rem', width: '1.25rem' },
}

export interface ErrorMessageProps {
  children: string | undefined | null
}

export const ErrorMessage: ContainerFC<{
  children: string | undefined | null
}> = ({ children }) => {
  if (!children) return null

  return (
    <div style={styles.container}>
      <ExclamationIcon style={styles.icon} />
      {children}
    </div>
  )
}

const ExclamationIcon = (props: SVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
