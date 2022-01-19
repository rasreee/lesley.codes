import styled from '@emotion/styled';
import { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </Svg>
  );
};

const Svg = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
  color: currentColor;
`;

export default SearchIcon;
