import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Calendar: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} fill="none">
    <path
      d="M16 16.004H2V5.996h14v10.008zM14 0a1 1 0 00-1 1v1H5V1a1 1 0 10-2 0v1H2C.89 2 0 2.801 0 3.8v12.4c0 .477.21.935.586 1.273C.96 17.81 1.47 18 2 18h14c.53 0 1.04-.19 1.414-.527.375-.338.586-.796.586-1.273V3.8c0-.999-.9-1.8-2-1.8h-1V1a1 1 0 00-1-1zm0 11.015a1 1 0 00-1-1h-3a1 1 0 00-1 1V13a1 1 0 001 1h3a1 1 0 001-1v-1.986z"
      fill={fill}
    />
  </svg>
);
