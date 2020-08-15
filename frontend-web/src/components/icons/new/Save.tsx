import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Save: React.FC<Props> = ({ 
  fill = COLOR.SECONDARY_100,
  width=24,
  height=24
}) => (
  <svg 
    width={width}
    height={height}
    fill="none" 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M.3 9.5a1 1 0 000 1.5l8.5 8.4c.4.4 1 .4 1.4 0L23.7 6a1 1 0 00-1.4-1.4L9.5 17.3 1.7 9.5a1 1 0 00-1.4 0z" 
      fill={fill} 
    />
  </svg>
);
