import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Complain: React.FC<IconBaseProps> = ({
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
      d="M10.2 5.8h3.6l-.6 8.7h-2.4l-.6-8.7zM12 19.4c-.5 0-1-.2-1.3-.5-.4-.4-.5-.8-.5-1.3s.1-.9.5-1.2c.3-.3.8-.5 1.3-.5s1 .2 1.3.5c.4.3.6.7.6 1.2s-.2 1-.6 1.3c-.3.3-.8.5-1.3.5z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12a12 12 0 11-24 0 12 12 0 0124 0zm-2 0a10 10 0 11-20 0 10 10 0 0120 0z"
      fill={fill}
    />
  </svg>
);
