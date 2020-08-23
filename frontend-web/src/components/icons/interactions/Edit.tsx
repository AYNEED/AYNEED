import React from 'react';

import { IconBaseProps } from 'src/types';

export const Edit: React.FC<IconBaseProps> = ({
  fill,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3.4l4.6 4.7 2.3-2.3c.5-.5.5-1.3 0-1.8l-3-2.9c-.4-.5-1.2-.5-1.7 0l-2.3 2.3zm3.3 6l-4.7-4.7L.8 18.6v4.6h4.6L19.3 9.4zm-2.9 0L4.6 21.2H2.8v-1.8L14.6 7.6l1.8 1.8z"
      fill={fill}
    />
  </svg>
);
