type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  return (
    <time className="text-hint" dateTime={dateString}>
      {dateString}
    </time>
  )
}

export default DateFormatter
