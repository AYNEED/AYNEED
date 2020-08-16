import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const PeoplePlus: React.FC<Props> = ({
  fill = COLOR.SECONDARY_100,
  width = 30,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 30 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.8 10.2c.4.2.8.2 1.2.2.4 0 .8 0 1.2-.2a5 5 0 002.6-4.4 3.8 3.8 0 00-7.6 0 5 5 0 002.6 4.4zM14 12a4.8 4.8 0 01-4 0 7 7 0 01-3.8-6.2 5.8 5.8 0 0111.6 0A7 7 0 0114 12z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.4 13.5l-1.8-1a7.7 7.7 0 00-6.5 7.7v.4C1.9 22.5 6.5 24 12 24c6 0 10.9-1.7 10.9-3.8 0-3.9-2.8-7-6.5-7.7a6.7 6.7 0 01-4 1.4h-.7c-.8 0-1.6-.2-2.3-.4zm5.9 1.9l1.5-.8-1.5.8zm1.5-.8c2.3.7 4 2.9 4 5.4v.1L19 21a22 22 0 01-7 1c-2.6 0-5-.4-6.7-.9l-1.8-.8A2 2 0 013 20a5.7 5.7 0 014.1-5.4 8.8 8.8 0 004.5 1.3h.6c1 0 2-.2 3-.5m5.6 4.5z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 7a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3h-3a1 1 0 110-2h3V7z"
      fill={fill}
    />
  </svg>
);
