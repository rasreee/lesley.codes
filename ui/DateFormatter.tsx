import { format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = new Date(dateString)

  return (
    <time className="text-hint" dateTime={dateString}>
      {format(date, 'LLL d yy')}
    </time>
  )
}

export default DateFormatter
