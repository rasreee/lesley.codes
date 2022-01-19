import classNames from 'classnames';
import { SVGProps } from 'react';

const SearchIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={classNames(className, 'h-[1.25rem] w-[1.25rem]')}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export default SearchIcon;