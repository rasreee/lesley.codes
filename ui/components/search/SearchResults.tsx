import { SearchResultData } from './SearchResultData';

interface SearchResultsProps {
  data: SearchResultData[];
}

const SearchResults = ({ data }: SearchResultsProps) => {
  return (
    <ul>
      {data.map((searchHit: SearchResultData) => (
        <li key={searchHit.id}>
          <a href={searchHit.sourceUrl}>{searchHit.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
