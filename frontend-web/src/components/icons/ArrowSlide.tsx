import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const ArrowSlide: React.FC<IconBaseProps> = ({
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
      d="M9 2.5a1 1 0 011.4.3l5 8.7a1 1 0 010 1l-5 8.7a1 1 0 11-1.8-1l4.7-8.2-4.7-8.2A1 1 0 019 2.5z"
      fill={fill}
    />
  </svg>
);
