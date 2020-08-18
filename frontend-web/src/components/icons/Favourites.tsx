import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Favourites: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 26,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 26 24"

  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 22.5l-.5-.3-1.4-1c-1.4-.9-2.8-2-4.1-3.1-1.6-1.3-3-2.8-4.1-4.5A9.2 9.2 0 011 8.5a6.8 6.8 0 016.5-7 6.2 6.2 0 015 2.4l.3.4.2.2.2-.2.3-.4 1-1 .1-.1c1.1-.8 2.5-1.3 3.8-1.3a6.8 6.8 0 016.6 7c0 1.9-.7 3.7-1.9 5.1a24.8 24.8 0 01-4.1 4.5 46.3 46.3 0 01-4.1 3.2l-1.4.9-.5.3zm-5.5-19a4.8 4.8 0 00-4.5 5c.1 1.5.6 2.8 1.5 4 1.1 1.5 2.4 3 3.8 4.1 1.3 1.1 2.6 2.1 4 3l.7.5.8-.5 3.9-3c1.4-1.2 2.7-2.6 3.8-4.1a7.3 7.3 0 001.5-4 4.8 4.8 0 00-4.6-5c-1 0-1.9.3-2.6 1l-.8.7-.3.4-1.7 2-1.7-2-.3-.4-.8-.8c-.7-.6-1.7-1-2.7-.9z"
      fill={fill}
    />
  </svg>
);
