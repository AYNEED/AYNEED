import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Treds: React.FC<Props> = ({
  fill = COLOR.SECONDARY_100,
  width = 25,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.9863 16H12.4863C7.23962 16 2.98633 11.7467 2.98633 6.5V1H0.986328V6.5C0.986328 12.8513 6.13505 18 12.4863 18H17.9863V16Z"
      fill={fill}
    />
  </svg>
);
