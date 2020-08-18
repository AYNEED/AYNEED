import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Notifications: React.FC<Props> = ({
  fill = COLOR.SECONDARY_100,
  width = 22,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 22 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 8v1.9c0 1.2.5 2.4 1.4 3.1.9.8 1.4 1.7 1.5 2.8 0 2.5-4 4-10.9 4-6.8 0-10.9-1.5-10.9-4 .1-1 .6-2 1.5-2.8.9-.7 1.4-1.9 1.5-3.1v-2a8 8 0 0115.8 0zM11 24a3.9 3.9 0 01-3.7-2.7 49 49 0 007.4 0c-.5 1.6-2 2.7-3.7 2.7z"
      fill={fill}
      stroke="#334D6E"
      stroke-width="2"
    />
  </svg>
);

//  TODO: stroke
