import { format, parseISO } from 'date-fns';

const getParsedDate = (dateString: string) => {
  try {
    const date = format(parseISO(dateString), 'MMMM dd, yyyy');

    return date;
  } catch (err) {
    console.error(`Failed to parse publishedAt ${dateString}.`, err);

    return '???';
  }
};

export const DateFormatter: React.FC<{ dateString: string }> = ({
  dateString,
}) => {
  const parsedDate = getParsedDate(dateString);

  return <>{parsedDate}</>;
};
