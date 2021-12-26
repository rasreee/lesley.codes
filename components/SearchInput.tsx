import { cn } from 'lib/classnames';
import React, { forwardRef, InputHTMLAttributes, Ref } from 'react';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
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
        {...props}
      />
    );
  }
);

SearchInput.displayName = `SearchInput`;
