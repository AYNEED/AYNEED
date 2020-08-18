import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const AddPhoto: React.FC<IconBaseProps> = ({
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
      d="M8.4 7H2v13h20V7H15.6l-.5-1.1-.6-1.3a1 1 0 00-1-.5h-3a1 1 0 00-1 .5L9 6 8.4 7zm-.6-3.2A3 3 0 0110.4 2h3.2a3 3 0 012.6 1.7L17 5H22c1.1 0 2 1 2 2v13a2 2 0 01-2 2H2a2 2 0 01-2-2V7c0-1 .9-2 2-2h5.1l.7-1.2zM16 13a4 4 0 10-8 0 4 4 0 008 0zm-4-6a6 6 0 110 12 6 6 0 010-12zm2.3 5.6a.5.5 0 010 1h-1.8v1.8a.5.5 0 11-1 0v-1.9H9.7a.5.5 0 110-1h1.8v-1.8a.5.5 0 011 0v1.9h1.8z"
      fill={fill}
    />
  </svg>
);
