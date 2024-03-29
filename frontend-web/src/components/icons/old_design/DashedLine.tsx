import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const DashedLine: React.FC<IconBaseProps> = ({
  fill = COLOR.PRIMARY_500,
  width = 828,
  height = 186,
}) => (
  <svg width={width} height={height} viewBox="0 0 828 186" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M827.7 2.2c-3.6 3.6-7.3 7.2-11.2 10.7l-1.3-1.5c3.8-3.5 7.5-7 11-10.6l1.5 1.4zm-35 30.5a412.2 412.2 0 01-25.3 17.8l-1-1.6c8.6-5.7 17-11.6 25.1-17.8l1.2 1.6zM741 66.5c-8.8 5-18 9.8-27.4 14.4l-.8-1.8c9.3-4.6 18.4-9.3 27.3-14.3l1 1.7zm-55.5 27.3c-9.4 4-19 7.8-28.7 11.5l-.7-1.9c9.7-3.6 19.3-7.5 28.6-11.5l.8 1.9zm-57.9 21.9c-9.7 3.2-19.5 6.3-29.5 9.2l-.5-1.9c9.9-3 19.7-6 29.4-9.2l.6 1.9zm-59.3 17.5c-9.9 2.7-19.9 5.1-30 7.5l-.4-2c10-2.3 20-4.8 30-7.4l.4 2zM508 147.3c-10 2.1-20.2 4-30.3 6l-.4-2a1367 1367 0 0030.3-6l.4 2zm-60.8 11.2c-10.2 1.7-20.3 3.2-30.5 4.7l-.3-2c10.2-1.4 20.3-3 30.5-4.6l.3 2zm-61.2 8.8c-10.2 1.3-20.5 2.5-30.7 3.6l-.2-2c10.2-1 20.4-2.3 30.7-3.6l.2 2zm-61.4 6.7l-30.8 2.7-.2-2 30.8-2.7.2 2zm-61.7 5l-30.8 2-.1-2a2606 2606 0 0030.8-2l.1 2zm-61.7 3.5l-30.9 1.2v-2l30.8-1.2v2zm-61.8 2.1l-30.8.7v-2l30.8-.7v2zm-61.8 1.1l-30.9.2v-2c9.9 0 20.2 0 30.9-.2v2zm-61.8.3H.5v-2h15.3v2z"
      fill={fill}
    />
  </svg>
);
