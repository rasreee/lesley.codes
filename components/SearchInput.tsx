import { useKeyPress } from 'hooks/useKeyPress';
import { cn } from 'lib/classnames';
import React, { ChangeEventHandler, useEffect, useRef } from 'react';

export interface SearchInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput: React.FunctionComponent<SearchInputProps> = ({
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useKeyPress('Escape', () => {
    inputRef.current?.blur();
  });

  return (
    <input
      ref={inputRef}
      aria-label="Search articles"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search articles"
      className={cn(
        'bg-white dark:bg-gray-800',
        'block w-full px-4 py-2 text-gray-900 border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:text-gray-100'
      )}
    />
  );
};
