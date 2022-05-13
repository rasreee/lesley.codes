import { ContentType } from 'modules/contents/api'
import { ErrorMessage } from 'ui/components'
import { SVGIconProps } from 'ui/icons/types'

import { useContentViews } from '../hooks/useContentViews'

export interface ViewsMetaProps {
  type: ContentType
  slug: string
}
export const ViewsMeta: React.FC<ViewsMetaProps> = ({ type, slug }) => {
  const { data: views, error } = useContentViews({ type, slug })

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '1rem',
        color: 'currentColor',
        opacity: '0.7',
        lineHeight: '1 !important',
      }}
    >
      <EyeIcon style={{ height: '1rem', width: '1rem' }} />
      <span style={{ fontSize: '0.875em' }}>{`${views ?? '--'} views`}</span>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </div>
  )
}

const defaultIconStyle = {
  height: '20px',
  width: '20px',
}

const EyeIcon = ({ style: customStyle, ...props }: SVGIconProps) => {
  const style = { ...defaultIconStyle, ...customStyle }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
      style={style}
    >
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}
