import classNames from 'classnames';
import { SVGProps } from 'react';

const RightArrowIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={classNames(className, 'h-[1.25rem] w-[1.25rem]')}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
      />
    </svg>
  );
};

export default RightArrowIcon;
