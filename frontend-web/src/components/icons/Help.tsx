import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Help: React.FC<IconBaseProps> = ({
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
      d="M11 12.5c-.3.5-.5 1-.5 1.7h3c0-.4 0-.8.3-1 .2-.3.5-.7 1-1.1l1-1a3.5 3.5 0 00.9-2.4 3 3 0 00-1.4-2.6 6 6 0 00-3.5-1c-1.3 0-2.3.3-3.3.8-.9.4-1.6 1-2.1 1.9L8.7 9a3.4 3.4 0 012.8-1.4c.6 0 1 .1 1.5.4.3.3.5.7.5 1.1 0 .4 0 .7-.3 1l-.9.9-1.3 1.4zM10.7 18.5c.3.3.8.5 1.3.5s1-.2 1.3-.5c.4-.3.5-.8.5-1.2 0-.5-.1-1-.5-1.3-.3-.3-.8-.5-1.3-.5s-1 .2-1.3.5c-.4.4-.5.8-.5 1.3 0 .4.1.9.5 1.2z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 12a12 12 0 11-24 0 12 12 0 0124 0zm-2 0a10 10 0 11-20 0 10 10 0 0120 0z"
      fill={fill}
    />
  </svg>
);
