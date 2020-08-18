import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Desktop: React.FC<IconBaseProps> = ({
  fill = COLOR.WHITE,
  width = 10,
  height = 6,
}) => (
  <svg width={width} height={height} viewBox="0 0 10 6" fill="none">
    <path
      d="M10 0.750001C10 0.335787 9.6802 7.15256e-07 9.28571 7.15256e-07L0.714286 0C0.319797 0 3.40598e-07 0.335786 3.40598e-07 0.75L0 5.25C0 5.66421 0.319797 6 0.714286 6H9.28571C9.6802 6 10 5.66422 10 5.25V0.750001Z"
      fill={fill}
    />
  </svg>
);
