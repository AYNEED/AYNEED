import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Remove: React.FC<Props> = ({
  fill = COLOR.SECONDARY_100,
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 6V4a3 3 0 00-3-3H8a3 3 0 00-3 3v2H2a1 1 0 000 2h1l2 12a3 3 0 003 3h8a3 3 0 003-3l2-12h1a1 1 0 100-2h-3zM7 6h10V4c0-.6-.4-1-1-1H8a1 1 0 00-1 1v2zM5 8h14l-2 12c0 .6-.4 1-1 1H8a1 1 0 01-1-1L5 8z"
      fill={fill}
    />
  </svg>
);