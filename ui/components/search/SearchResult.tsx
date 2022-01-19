import { SearchResultData } from './SearchResultData';

interface SearchResultProps extends SearchResultData {}

const SearchResult = ({ title, sourceUrl }: SearchResultProps) => {
  return <a href={sourceUrl}>{title}</a>;
};

export default SearchResult;
