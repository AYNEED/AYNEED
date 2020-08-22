import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconPropsWithFilled } from 'src/types';

export const Message: React.FC<IconPropsWithFilled> = ({
  fill = COLOR.SECONDARY_100,
  width = 26,
  height = 24,
  filled = false,
}) => (
  <svg
    width={width}
    height={height}
    fill={filled ? COLOR.SECONDARY_100 : 'none'}
  >
    <path
      d="M16.095 21.276l-.31-.088-.303.11a10.182 10.182 0 01-3.482.608c-5.78 0-10.467-4.709-10.467-10.466C1.533 5.687 6.241 1 12 1s10.466 4.687 10.466 10.44c0 1.31-.24 2.579-.681 3.81a11.33 11.33 0 01-1.587 2.704l-.36.454.214.538 1.548 3.891-5.505-1.56z"
      stroke={fill}
      strokeWidth="2"
    />
  </svg>
);
