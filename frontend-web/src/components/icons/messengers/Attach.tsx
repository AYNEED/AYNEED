import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Attach: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 25,
  height = 24,
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 25 24">
    <path
      d="M11.9844 3H9.98438C9.43209 3 8.98438 3.44772 8.98438 4V20C8.98438 20.5523 9.43209 21 9.98437 21H14.9844C15.5367 21 15.9844 20.5523 15.9844 20V8C15.9844 7.44771 16.4321 7 16.9844 7C17.5367 7 17.9844 7.44771 17.9844 8V20C17.9844 21.6569 16.6412 23 14.9844 23H9.98437C8.32752 23 6.98438 21.6569 6.98438 20V4C6.98438 2.34315 8.32752 1 9.98438 1H11.9844C13.6412 1 14.9844 2.34315 14.9844 4V16C14.9844 18 14.4844 19 12.4902 19C10.4844 19 9.98438 18 9.98438 16V8C9.98438 7.44772 10.4321 7 10.9844 7C11.5367 7 11.9844 7.44772 11.9844 8V16C11.9844 16.5523 11.996 17 12.4902 17C12.9844 17 12.9844 16.5523 12.9844 16V4C12.9844 3.44772 12.5367 3 11.9844 3Z"
      fill={fill}
    />
  </svg>
);
