import { css, PropsOf } from '@emotion/react'
import styled from '@emotion/styled'
import { defaultIconSizeStyle } from 'ui/icons/styles'
import { IconComponentType, IconProps } from 'ui/icons/types'
import { clickableStyle } from 'ui/lib/clickable'
import { transitionAll } from 'ui/lib/transition'

import { defaultButtonStyle } from './styles'
export type IconButtonProps<IconComp extends IconComponentType> =
  React.HTMLAttributes<HTMLButtonElement> & {
    icon: IconComp
    iconProps?: PropsOf<IconComp>
  }

export const IconButton = <IconComp extends IconComponentType>({
  icon,
  iconProps = {} as PropsOf<IconComp>,
  ...props
}: IconButtonProps<IconComp>) => {
  const Icon = icon as React.ComponentType<IconProps>

  return (
    <IconButtonContainer {...props}>
      <Icon {...iconProps} />
    </IconButtonContainer>
  )
}

export const IconButtonContainer = styled.button(
  defaultButtonStyle,
  clickableStyle,
  transitionAll,
  defaultIconSizeStyle,
  css`
    display: flex;
    align-items: center;
  `,
)
