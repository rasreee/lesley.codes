import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

const getParsedDate = (date: string) => {
  try {
    return format(parseISO(date), 'MMMM dd, Y')
  } catch (err) {
    console.error(`Failed to parse createdAt ${date}.`, err)

    return '???'
  }
}

interface DateFormatterProps {
  date: string
}

export const DateFormatter = ({ date }: DateFormatterProps) => {
  const parsedDate = getParsedDate(date)

  return <>{parsedDate}</>
}
