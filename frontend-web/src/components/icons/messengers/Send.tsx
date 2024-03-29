import React from 'react';

import { IconBaseProps } from 'src/types';

export const Send: React.FC<IconBaseProps> = ({
  fill,
  width = 25,
  height = 24,
}) => (
  <svg width={width} height={height} viewBox="0 0 25 24">
    <path
      d="M0.996094 23.0007L24.9961 12L0.996094 1.00073V10.0007L17.9941 12L0.996094 14.0007L0.996094 23.0007Z"
      fill={fill}
    />
  </svg>
);
