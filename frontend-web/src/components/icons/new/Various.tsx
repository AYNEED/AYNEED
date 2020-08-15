import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Various: React.FC<Props> = ({ 
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
      d="M15 3a3 3 0 11-6 0 3 3 0 016 0zM15 12a3 3 0 11-6 0 3 3 0 016 0zM15 21a3 3 0 11-6 0 3 3 0 016 0z" 
      fill={fill} 
    />
  </svg>
);
