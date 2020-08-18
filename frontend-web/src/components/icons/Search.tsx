import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Search: React.FC<Props> = ({
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
      d="M15.9 15.2a9 9 0 10-.7.7l2 2v.7l5.2 5.2 1.4-1.4-5.2-5.2h-.7l-2-2zm-6.7 1a7 7 0 100-14 7 7 0 000 14z"
      fill={fill}
    />
  </svg>
);
