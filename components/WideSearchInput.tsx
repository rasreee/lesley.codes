import { cn } from '@lib/classnames';
import { useAutoFocus } from '@ui/hooks/useAutoFocus';
import { registerSearch } from 'db/searches';
import React, { ChangeEventHandler, useEffect, useRef } from 'react';

const MIN_QUERY_LENGTH = 3;

export interface WideSearchInputProps {
  query: string;
  onChange: (value: string) => void;
}

export const WideSearchInput = (props: WideSearchInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useAutoFocus(inputRef);

  const { query, onChange } = props;

  useEffect(() => {
    if (query.length < MIN_QUERY_LENGTH) return;

    registerSearch(query).then((response) =>
      console.log('🔍 Registered search: ', response)
    );
  }, [query]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.currentTarget.value;
    onChange(newValue);
  };

  return (
    <input
      ref={inputRef}
      onChange={handleChange}
      aria-label="Search articles"
      type="text"
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
