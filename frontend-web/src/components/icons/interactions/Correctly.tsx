import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Correctly: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 18 18">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM16.47 9C16.47 13.1256 13.1256 16.47 9 16.47C4.87443 16.47 1.53 13.1256 1.53 9C1.53 4.87443 4.87443 1.53 9 1.53C13.1256 1.53 16.47 4.87443 16.47 9Z"
      fill={fill}
    />
    <path
      d="M8.38737 12.4188C8.23619 12.5733 8.02502 12.6291 7.83049 12.5862C7.71843 12.5626 7.61164 12.5064 7.52469 12.4176L3.77734 8.58885C3.54069 8.34706 3.54069 7.95504 3.77734 7.71325C4.014 7.47146 4.39768 7.47146 4.63434 7.71325L7.95663 11.1077L13.3654 5.58149C13.602 5.3397 13.9857 5.3397 14.2224 5.58149C14.459 5.82328 14.459 6.2153 14.2224 6.45709L8.38737 12.4188Z"
      fill={fill}
    />
  </svg>
);
