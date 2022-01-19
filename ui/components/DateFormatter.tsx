import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const getParsedDate = (date: string) => {
  try {
    return format(parseISO(date), 'MMMM dd, yyyy');
  } catch (err) {
    console.error(`Failed to parse publishedAt ${date}.`, err);

    return '???';
  }
};

export interface DateFormatterProps {
  date: string;
}

const DateFormatter = ({ date }: DateFormatterProps) => {
  const parsedDate = getParsedDate(date);

  return <>{parsedDate}</>;
};

export default DateFormatter;
