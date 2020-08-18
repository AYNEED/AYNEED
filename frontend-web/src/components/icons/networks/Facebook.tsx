import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Facebook: React.FC<IconBaseProps> = ({
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
      d="M13.7882 23.3333V12.9939H17.3262L17.8559 8.96453H13.7882V6.39186C13.7882 5.22528 14.1185 4.43019 15.8241 4.43019L17.9993 4.4292V0.82535C17.6229 0.776423 16.3318 0.666748 14.8296 0.666748C11.6935 0.666748 9.54639 2.54447 9.54639 5.99301V8.96464H5.99927V12.9941H9.54628V23.3334L13.7882 23.3333Z"
      fill={fill}
    />
  </svg>
);
