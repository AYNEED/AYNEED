import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Concept: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6 1.2a1 1 0 00-1.2 0C9.1 2.6 5.1 7.2 5 15.6a19 19 0 00-1.9 3c-.5 1-.9 2.5-1 3-.3.8.6 1.6 1.5 1.2L8 21.1l.2.2.2.2.7.4c.7.6 1.6 1 2.9 1 1.3 0 2.2-.4 3-1l.6-.4a19.9 19.9 0 01.4-.4l4.4 1.7c.9.4 1.8-.4 1.5-1.3-.1-.4-.5-2-1-3a19 19 0 00-1.9-2.9c-.1-8.4-4.1-13-6.4-14.4zM7 16c0-7.4 3.2-11.4 5-12.8 1.8 1.4 5 5.4 5 12.8 0 .2 0 .4.2.6a18.7 18.7 0 012.2 3.7l-3-1.2c-.2-.1-.5-.1-.8 0a4 4 0 00-1 .6l-.4.2-.4.4c-.6.4-1.1.7-1.8.7s-1.2-.3-1.8-.7l-.4-.4-.4-.2a4 4 0 00-1-.6c-.3-.1-.6-.1-.8 0l-3 1.2.3-.9c.5-1 1.7-2.5 1.9-2.8L7 16zm4-3a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 100 6 3 3 0 000-6z"
      fill={fill}
    />
  </svg>
);
