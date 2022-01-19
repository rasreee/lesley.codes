import { SearchHit } from './SearchHit';

interface SearchDropdownProps {
  data: SearchHit[];
}

const SearchDropdown = ({ data }: SearchDropdownProps) => {
  return (
    <ul>
      {data.map((searchHit: SearchHit) => (
        <li key={searchHit.id}>
          <a href={searchHit.sourceUrl}>{searchHit.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default SearchDropdown;
