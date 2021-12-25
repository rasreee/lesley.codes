import { useAutoFocus } from 'hooks/useAutoFocus';
import { cn } from 'lib/classnames';
import React, { ChangeEventHandler, useRef, useState } from 'react';

export const MIN_SEARCH_QUERY_LENGTH = 4;

export const registerSearch = (query: string) => {
  console.log('Registering search query: ', query);
};

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  value,
  onChange,
}) => {
  const [localValue, setLocalValue] = useState(value);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useAutoFocus(inputRef);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.currentTarget.value;
    setLocalValue(newValue);

    if (newValue.length >= MIN_SEARCH_QUERY_LENGTH) {
      registerSearch(newValue);
    }

    onChange(newValue);
  };

  return (
    <input
      ref={inputRef}
      aria-label="Search articles"
      type="text"
      value={localValue}
      onChange={handleChange}
      placeholder="Search articles"
      className={cn(
        'bg-white dark:bg-gray-800',
        'block w-full px-4 py-2 text-gray-900 border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:text-gray-100'
      )}
    />
  );
};
