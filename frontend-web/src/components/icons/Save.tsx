import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Save: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"

  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.3 9.5a1 1 0 000 1.5l8.5 8.4c.4.4 1 .4 1.4 0L23.7 6a1 1 0 00-1.4-1.4L9.5 17.3 1.7 9.5a1 1 0 00-1.4 0z"
      fill={fill}
    />
  </svg>
);
