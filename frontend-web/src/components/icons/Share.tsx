import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Share: React.FC<Props> = ({
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
      d="M24 4a4 4 0 01-7.1 2.5l-9 5a4 4 0 010 1l9 5a4 4 0 11-.9 1.9l-8.7-5a4 4 0 110-4.7l8.7-5V4a4 4 0 018 0zm-4 2a2 2 0 100-4 2 2 0 000 4zm0 16a2 2 0 100-4 2 2 0 000 4zM6 12a2 2 0 11-4 0 2 2 0 014 0z"
      fill={fill}
    />
  </svg>
);
