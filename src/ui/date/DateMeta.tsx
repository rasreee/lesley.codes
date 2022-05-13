import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { responsiveTextSize } from 'ui/lib/text'

import { DateFormatter } from './DateFormatter'

export interface DateMetaProps {
  prefix?: string
  date: string
  style?: React.CSSProperties
  className?: string
}

export const DateMeta: React.FC<DateMetaProps> = ({
  prefix = '',
  date,
  style,
  className,
}) => {
  return (
    <DateMetaContainer style={style} className={className}>
      {prefix} <DateFormatter date={date} />
    </DateMetaContainer>
  )
}

const DateMetaContainer = styled.span(
  css`
    min-width: max-content;
    line-height: 1;
  `,
  ({ theme }) =>
    css`
      color: ${theme.colors.hintMd};
    `,
  responsiveTextSize('sm', 'md'),
)
