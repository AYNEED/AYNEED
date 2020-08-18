import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Message: React.FC<Props> = ({
  fill = COLOR.TRANSPARENT,
  width = 26,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 26 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 21.3l-.2-.1-.3.1a10.5 10.5 0 01-14-9.9A10.5 10.5 0 1120.2 18l-.4.4.3.5 1.5 4-5.5-1.6z"
      fill={fill}
      stroke="#334D6E"
      stroke-width="2"
    />
  </svg>
);