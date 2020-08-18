import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const ShippedDelivered: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 19,
  height = 10,
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 19 10">
    <path
      d="M5.43151 8.79353C5.26 8.96504 5.02041 9.02699 4.79973 8.97937C4.67259 8.95321 4.55143 8.89081 4.45279 8.79217L0.201364 4.54074C-0.0671216 4.27226 -0.0671213 3.83696 0.201364 3.56847C0.46985 3.29999 0.905151 3.29999 1.17364 3.56847L4.94283 7.33766L11.0791 1.20136C11.3476 0.932878 11.7829 0.932879 12.0514 1.20136C12.3199 1.46985 12.3199 1.90515 12.0514 2.17364L5.43151 8.79353Z"
      fill={fill}
    />
    <path
      d="M11.4318 8.79353C11.2603 8.96504 11.0207 9.02699 10.8001 8.97937C10.6729 8.95321 10.5518 8.89081 10.4531 8.79217L8.67578 7.01483L9.64805 6.04256L10.9432 7.33766L17.0795 1.20136C17.3479 0.932878 17.7832 0.932879 18.0517 1.20136C18.3202 1.46985 18.3202 1.90515 18.0517 2.17364L11.4318 8.79353Z"
      fill={fill}
    />
  </svg>
);
