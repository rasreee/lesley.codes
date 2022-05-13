import { SVGIconProps } from './types'

const defaultIconStyle = { height: '1.25rem', width: '1.25rem' }

export const ExpandIcon = ({ style: customStyle, ...props }: SVGIconProps) => {
  const style = { ...defaultIconStyle, ...customStyle }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      style={style}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      />
    </svg>
  )
}
