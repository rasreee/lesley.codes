import classNames from 'classnames'
import { format } from 'date-fns'

type Props = {
  dateString: string
  size?: string
  pattern?: string
}

const DateFormatter = ({ dateString, size = 'base', pattern = 'LLL d, yyyy' }: Props) => {
  const date = new Date(dateString)

  return (
    <time className={classNames(`text-${size}`, 'text-hint')} dateTime={dateString}>
      {format(date, pattern)}
    </time>
  )
}

export default DateFormatter
