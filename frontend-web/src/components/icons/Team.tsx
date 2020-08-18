import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Team: React.FC<Props> = ({
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
      d="M12 6a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 100-8 4 4 0 000 8zM20 19a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 100-8 4 4 0 000 8zM4 19a2 2 0 100-4 2 2 0 000 4zm0 2a4 4 0 100-8 4 4 0 000 8z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.6 5.8a4 4 0 00.4-2 10 10 0 016 9.7 4 4 0 00-2-.5 8 8 0 00-4.4-7.2zM12 23a10 10 0 006.4-2.3 4 4 0 01-1.6-1.3 8 8 0 01-9.6 0c-.4.6-1 1-1.6 1.3A10 10 0 0012 23zM2 13.5V13a10 10 0 016-9.2 4 4 0 00.4 2A8 8 0 004 13a4 4 0 00-2 .5z"
      fill={fill}
    />
  </svg>
);