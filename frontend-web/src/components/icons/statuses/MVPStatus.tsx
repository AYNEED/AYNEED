import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const MVPStatus: React.FC<IconBaseProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.2c-1.3 1.1-3.4 4-3.4 9 0 .3 0 .5-.2.7a13.4 13.4 0 00-1.4 2l1.7-.6c.2-.1.5-.1.8 0 .3 0 .6.3.8.4l.2.3.4.2c.3.3.7.5 1.1.5.4 0 .8-.2 1.1-.5l.4-.2.2-.3.8-.4c.3-.1.6-.1.8 0l1.7.6-1.4-2-.2-.7c0-5-2.1-7.9-3.4-9zm-.6-2a1 1 0 011.2 0c1.7 1 4.7 4.5 4.8 10.7l1.4 2.1.7 2.2c.3.9-.6 1.6-1.5 1.3l-3-1.2-.2.2c-.2 0-.3.2-.5.3-.5.4-1.3.9-2.3.9-1 0-1.8-.5-2.3-.9-.2 0-.3-.2-.5-.3l-.2-.2-3 1.2c-.9.3-1.8-.4-1.5-1.3 0-.4.4-1.5.7-2.2.4-.7 1-1.7 1.4-2.1.1-6.2 3-9.7 4.8-10.7zM10 9.7a2 2 0 114 0 2 2 0 01-4 0zm1 13.2c.4.8 1.6.8 2 0l1.4-2.4c.5-.8 0-1.8-1-1.8h-2.8c-1 0-1.5 1-1 1.8l1.4 2.4z"
      fill={fill}
    />
  </svg>
);
