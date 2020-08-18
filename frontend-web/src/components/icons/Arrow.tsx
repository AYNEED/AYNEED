import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Arrow: React.FC<Props> = ({
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
      d="M2.8 8a1 1 0 000 1.5l8.5 8.4c.4.4 1 .4 1.4 0l8.5-8.4A1 1 0 0019.8 8L12 15.8 4.2 8.1a1 1 0 00-1.4 0z"
      fill={fill}
    />
  </svg>
);