import React from 'react';

import { IconBaseProps } from 'src/types';

export const Idea: React.FC<IconBaseProps> = ({
  fill,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8 22.7V22c.6 0 1.1-.3 1.5-.7.4-.4.6-1 .6-1.5v-2c0-1.9.8-3.8 2.2-5.3 1-1.1 1.6-2.5 1.8-3.9a7 7 0 00-.6-4.1 7.7 7.7 0 00-3-3.2 8.4 8.4 0 00-8.6 0 7.7 7.7 0 00-3 3.2 7 7 0 001.2 8 8 8 0 012.2 5.4v2c0 .5.2 1 .6 1.4.4.4.9.7 1.5.7v.8c0 .4.3.7.7 1a2 2 0 002.2 0c.4-.3.6-.6.7-1zM12 20.2l1.6-.1.2-.2.1-.2v-2c0-2.4 1-4.7 2.7-6.6.7-.8 1.2-1.8 1.3-2.8.2-1.1 0-2.2-.4-3.1-.5-1-1.3-1.8-2.2-2.4a6.3 6.3 0 00-6.6 0c-1 .6-1.7 1.4-2.2 2.4a5.2 5.2 0 001 6 9.9 9.9 0 012.6 6.6v2.1l.3.2 1.6.1z"
      fill={fill}
    />
  </svg>
);
