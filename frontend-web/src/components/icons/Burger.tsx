import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Burger: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 4c0-.6.4-1 1-1h22a1 1 0 110 2H1a1 1 0 01-1-1zM0 12c0-.6.4-1 1-1h22a1 1 0 110 2H1a1 1 0 01-1-1zM1 19a1 1 0 100 2h22a1 1 0 100-2H1z"
      fill={fill}
    />
  </svg>
);
