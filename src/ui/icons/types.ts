import { ImageProps } from 'next/image'

export interface ImageIconProps extends React.HTMLAttributes<HTMLElement> {
  imageProps?: ImageProps
}

export type SVGIconProps = React.SVGProps<SVGSVGElement>

export type IconProps = ImageIconProps | SVGIconProps

export type IconComponentType =
  | React.ComponentType<SVGIconProps>
  | React.ComponentType<ImageIconProps>
