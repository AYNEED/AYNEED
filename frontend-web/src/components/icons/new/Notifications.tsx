import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Notifications: React.FC<Props> = ({ 
  fill = COLOR.PRIMARY_500 ,
  width=26,
  height=24
}) => (
  <svg 
    width={width}
    height={height}
    fill="none" 
    viewBox="0 0 26 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M17 10V8A6 6 0 005 8v2c0 1.7-.8 3.4-2.1 4.6-.4.3-.7.8-.8 1.3l.2.2c.2.2.6.5 1.4.8 1.5.5 4 .9 7.3.9s5.8-.4 7.3-1a4 4 0 001.4-.7l.2-.2c-.1-.5-.4-1-.8-1.3A6.4 6.4 0 0117 10zm4.9 5.8c0 1.6-1.6 2.7-4.4 3.4l-3 .4-3.5.2a37.8 37.8 0 01-6.5-.6C1.7 18.5.1 17.4.1 15.8c.1-1 .6-2 1.5-2.8.9-.7 1.4-1.9 1.5-3.1v-2a8 8 0 0115.8 0v2c0 1.2.6 2.4 1.5 3.1.9.8 1.4 1.7 1.5 2.8zm-9.5 5.6l2.3-.1a4 4 0 01-1.6 2 3.9 3.9 0 01-5.8-2 45.2 45.2 0 003.7.1h1.4z"
      fill={fill}
    />
  </svg>
);
