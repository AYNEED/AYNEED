import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Size: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 18,
  height = 18,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 18 18"

  >
    <path
      d="M4.5 18C3.67157 18 3 17.3284 3 16.5C3 15.6716 3.67157 15 4.5 15C5.32843 15 6 15.6716 6 16.5C6 17.3284 5.32843 18 4.5 18Z"
      fill={fill}
    />
    <path
      d="M16.5 18C15.6716 18 15 17.3284 15 16.5C15 15.6716 15.6716 15 16.5 15C17.3284 15 18 15.6716 18 16.5C18 17.3284 17.3284 18 16.5 18Z"
      fill={fill}
    />
    <path
      d="M16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12Z"
      fill={fill}
    />
    <path
      d="M10.5 12C9.67157 12 9 11.3284 9 10.5C9 9.67157 9.67157 9 10.5 9C11.3284 9 12 9.67157 12 10.5C12 11.3284 11.3284 12 10.5 12Z"
      fill={fill}
    />
    <path
      d="M16.5 6C15.6716 6 15 5.32843 15 4.5C15 3.67157 15.6716 3 16.5 3C17.3284 3 18 3.67157 18 4.5C18 5.32843 17.3284 6 16.5 6Z"
      fill={fill}
    />
    <path
      d="M10.5 18C9.67157 18 9 17.3284 9 16.5C9 15.6716 9.67157 15 10.5 15C11.3284 15 12 15.6716 12 16.5C12 17.3284 11.3284 18 10.5 18Z"
      fill={fill}
    />
  </svg>
);
