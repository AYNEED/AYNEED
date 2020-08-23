import React from 'react';

import { IconBaseProps } from 'src/types';

export const Main: React.FC<IconBaseProps> = ({
  fill,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      d="M23 11.6a1 1 0 01-1.4 1.4L12 3.4 2.4 13A1 1 0 011 11.6L11.3 1.3a1 1 0 011.4 0L23 11.6zM3 15a1 1 0 112 0v5c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-5a1 1 0 012 0v5a3 3 0 01-3 3H6a3 3 0 01-3-3v-5z"
      fill={fill}
    />
  </svg>
);
