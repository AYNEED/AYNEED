import React from 'react';

import { COLOR } from 'src/constants/colors';


type Props = {
  fill?: COLOR;
};


export const RocketPlume: React.FC<Props> = ({ fill = COLOR.PRIMARY_500 }) => (
  <svg width="8" height="15" viewBox="0 0 8 15" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.85 5.3c.03 1.76-.76 4-1.55 5.78-.36.82-.72 1.54-1 2.07l-.02.04-.47.85-.5.86-.5-.86c-.03-.05-.2-.35-.43-.82l-.03-.04c-.27-.54-.63-1.28-1-2.12-.5-1.14-1-2.46-1.3-3.7a8.43 8.43 0 01-.3-2.04c0-1.72.58-3.3 1.53-4.24C2.82.45 3.54.18 4.3.14c1.98 0 3.48 1.73 3.54 5.16z"
      fill={fill}
    />
  </svg>
);
