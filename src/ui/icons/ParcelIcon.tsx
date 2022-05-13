import { css } from '@emotion/react'
import Image from 'next/image'
import parcelIconSrc from 'public/images/parcel-logo.png'

import { defaultIconStyle } from './styles'
import { ImageIconProps } from './types'

export const ParcelIcon = ({
  style: customStyle,
  imageProps,
  ...props
}: ImageIconProps) => {
  const style = { ...defaultIconStyle, ...customStyle }

  return (
    <div
      {...props}
      style={style}
      css={css`
        padding-top: 0.375rem;
      `}
    >
      <Image
        src={parcelIconSrc}
        alt="parcel-logo"
        className="parcel-logo"
        {...imageProps}
      />
    </div>
  )
}
