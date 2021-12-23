import classNames from 'classnames'
import { format } from 'date-fns'

type Props = {
  dateString: string
  size?: string
  pattern?: string
  className?: string
}

const DateFormatter = ({ dateString, className = 'text-current', size = 'base', pattern = 'LLL d, yyyy' }: Props) => {
  const date = new Date(dateString)

  return (
    <time className={classNames(`text-${size}`, className)} dateTime={dateString}>
      {format(date, pattern)}
    </time>
  )
}

export default DateFormatter
