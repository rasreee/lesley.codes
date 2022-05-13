import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { InputHTMLProps } from 'lib/react'
import { ForwardedRef, forwardRef } from 'react'
import { mq } from 'ui/lib/mq'
import { pseudo } from 'ui/lib/pseudo'
import { transitionAll } from 'ui/lib/transition'
import { StyledProps } from 'ui/lib/types'
type FocusedProps = { isFocused: boolean }

const inputColorStyle = ({ theme, isFocused }: StyledProps<FocusedProps>) =>
  isFocused
    ? css`
        color: ${theme.colors.text} !important;
        border-color: ${theme.colors.hint};
      `
    : css`
        color: ${theme.colors.hint} !important;
      `

export const Container = styled.div<FocusedProps>(
  ({ theme }) => css`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0px;
    padding-right: 1rem;
    width: 100%;
    background: ${theme.colors.muted};
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-radius: ${theme.radii['full']};
    ${pseudo('_hover')} {
      border-color: ${theme.colors.hint};
    }
  `,
  inputColorStyle,
  transitionAll,
)

const SInput = styled.input`
  border: none;
  background: none;
  flex: 1;
  ${({ theme }) =>
    css`
      font-size: ${theme.fontSizes.md};
      line-height: 1;
      color: ${theme.colors.text};
      ${mq({
        padding: ['0.5rem 1.25rem', '0.625rem 1.25rem', '0.75rem 1.25rem'],
      })}
      ${pseudo('_placeholder')} {
        color: ${theme.colors.hintMd};
      }
    `}
`
export const Input: React.FC<InputHTMLProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>) => (
    <SInput {...props} ref={ref} />
  ),
)
