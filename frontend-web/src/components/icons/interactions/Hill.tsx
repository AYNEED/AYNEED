import React from 'react';

import { IconBaseProps } from 'src/types';

export const Hill: React.FC<IconBaseProps> = ({
  fill,
  width = 19,
  height = 194,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 164"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 164V156V8V0C0 4.41827 4.47715 8 10 8H11C15.4183 8 19 11.5817 19 16V148C19 152.418 15.4183 156 11 156H10C4.47715 156 0 159.582 0 164Z"
      fill="#047CAC"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.81229 74.0434C7.31716 73.7673 7.9692 73.9418 8.26866 74.4331L12.559 81.4731C12.6513 81.6246 12.6994 81.7885 12.7068 81.9509C12.7174 82.1448 12.6705 82.345 12.5594 82.5272L8.26937 89.5667C7.9699 90.0581 7.31786 90.2326 6.813 89.9564C6.30814 89.6803 6.14163 89.0581 6.44109 88.5667L10.4427 82.0005L6.44039 75.4331C6.14092 74.9418 6.30743 74.3195 6.81229 74.0434Z"
      fill="#E4E9F0"
    />
  </svg>
);
