import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Add: React.FC<Props> = ({ 
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
      d="M12 0a1 1 0 00-1 1v10H1a1 1 0 100 2h10v10a1 1 0 102 0V13h10a1 1 0 100-2H13V1c0-.6-.4-1-1-1z" 
      fill={fill} 
    />
  </svg>
);
