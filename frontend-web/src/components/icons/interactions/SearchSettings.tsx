import React from 'react';

import { IconBaseProps } from 'src/types';

export const SearchSettings: React.FC<IconBaseProps> = ({
  fill,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 1c.6 0 1 .4 1 1v1h3a1 1 0 110 2h-3v1a1 1 0 11-2 0V2c0-.6.4-1 1-1zM6 10a1 1 0 00-2 0v1H1a1 1 0 100 2h3v1a1 1 0 102 0v-4zM14 18a1 1 0 10-2 0v4a1 1 0 102 0v-1h9a1 1 0 100-2h-9v-1zM1 19h9v2H1a1 1 0 110-2zM8 13h15a1 1 0 100-2H8v2zM1 3h15v2H1a1 1 0 010-2z"
      fill={fill}
    />
  </svg>
);
