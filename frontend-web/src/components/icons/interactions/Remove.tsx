import React from 'react';

import { IconBaseProps } from 'src/types';

export const Remove: React.FC<IconBaseProps> = ({
  fill,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 6V4a3 3 0 00-3-3H8a3 3 0 00-3 3v2H2a1 1 0 000 2h1l2 12a3 3 0 003 3h8a3 3 0 003-3l2-12h1a1 1 0 100-2h-3zM7 6h10V4c0-.6-.4-1-1-1H8a1 1 0 00-1 1v2zM5 8h14l-2 12c0 .6-.4 1-1 1H8a1 1 0 01-1-1L5 8z"
      fill={fill}
    />
  </svg>
);
