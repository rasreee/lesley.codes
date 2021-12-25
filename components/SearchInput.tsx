import { registerSearch } from 'db/searches';
import { useAutoFocus } from 'hooks/useAutoFocus';
import { cn } from 'lib/classnames';
import React, { ChangeEventHandler, useRef, useState } from 'react';

const MIN_SEARCH_QUERY_LENGTH = 4;

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
        'border border-gray-200 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500',
        'w-full',
        'text',
        'rounded-md',
        'px-4 py-2'
      )}
    />
  );
};
