import React from 'react';

import { IconPropsWithFilled } from 'src/types';

export const Message: React.FC<IconPropsWithFilled> = ({
  fill,
  width = 26,
  height = 24,
  filled = false,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      d={
        filled
          ? 'M22.94 11.44a11.47 11.47 0 10-11.47 11.47 11.26 11.26 0 003.82-.67L21.47 24h.11a.74.74 0 00.51-.21.67.67 0 00.16-.62l-1.78-4.59a12.56 12.56 0 001.74-3 12.3 12.3 0 00.73-4.14z'
          : 'M15.7 20.1l4.2 1.2-1.2-3.1.7-.9c.6-.7 1.1-1.6 1.4-2.4.4-1.1.6-2.3.6-3.5C21.5 6.2 17.2 2 12 2s-9.5 4.2-9.5 9.4 4.2 9.5 9.5 9.5c1.1 0 2.1-.2 3.1-.5l.6-.3zm7-4.5c-.4 1-1 2.1-1.7 3l1.8 4.6c.1.2 0 .5-.2.6-.1.1-.3.2-.5.2H22l-6.2-1.8c-1.3.5-2.5.7-3.8.7C5.7 22.9.5 17.7.5 11.4S5.7 0 12 0s11.5 5.1 11.5 11.4c0 1.5-.3 2.9-.8 4.2z'
      }
      fill={fill}
    />
  </svg>
);
