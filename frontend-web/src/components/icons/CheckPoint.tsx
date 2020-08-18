import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const CheckPoint: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.30071 11.0343C2.91018 11.4249 2.91018 12.058 3.30071 12.4486L8.80055 17.9484C9.19107 18.3389 9.82424 18.3389 10.2148 17.9484L20.6993 7.4659C21.0898 7.07537 21.0898 6.44221 20.6993 6.05168C20.3088 5.66116 19.6756 5.66116 19.2851 6.05168L9.50765 15.8271L4.71492 11.0343C4.32439 10.6438 3.69123 10.6438 3.30071 11.0343Z"
      fill={fill}
    />
  </svg>
);
