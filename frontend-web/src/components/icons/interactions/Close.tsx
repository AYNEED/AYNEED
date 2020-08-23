import React from 'react';

import { IconBaseProps } from 'src/types';

export const Close: React.FC<IconBaseProps> = ({
  fill,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      d="M21.2 2.8a1 1 0 00-1.4 0L12 10.6 4.2 2.8a1 1 0 00-1.4 1.4l7.8 7.8-7.8 7.8a1 1 0 101.4 1.4l7.8-7.8 7.8 7.8a1 1 0 001.4-1.4L13.4 12l7.8-7.8c.4-.4.4-1 0-1.4z"
      fill={fill}
    />
  </svg>
);
