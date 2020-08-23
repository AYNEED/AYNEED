import React from 'react';

import { IconBaseProps } from 'src/types';

export const Various: React.FC<IconBaseProps> = ({
  fill,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      d="M15 3a3 3 0 11-6 0 3 3 0 016 0zM15 12a3 3 0 11-6 0 3 3 0 016 0zM15 21a3 3 0 11-6 0 3 3 0 016 0z"
      fill={fill}
    />
  </svg>
);
