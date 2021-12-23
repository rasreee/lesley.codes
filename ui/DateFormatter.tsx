type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  return <div className="text-hint">{dateString}</div>
}

export default DateFormatter
