import { useSearch } from '@features/search/useSearch';
import SearchIcon from '@ui/icons/SearchIcon';

import { Section } from './Section';
import { WideSearchInput } from './WideSearchInput';

const SearchPostsBar = () => {
  const { query, setQuery } = useSearch();

  return (
    <Section className="relative w-full">
      <WideSearchInput query={query} onChange={setQuery} />
      <SearchIcon className="absolute right-3 top-[1.125rem]" />
    </Section>
  );
};

export default SearchPostsBar;
