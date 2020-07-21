import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
};

export const Search: React.FC<Props> = ({ fill = COLOR.GRAY }) => (
  <svg width="20" height="21" fill="none">
    <path
      d="M14.294 13.079h-.904l-.32-.31a7.4 7.4 0 001.796-4.836 7.433 7.433 0 10-7.433 7.433 7.4 7.4 0 004.837-1.796l.309.32v.904l5.717 5.706L20 18.796l-5.706-5.717zm-6.861 0a5.139 5.139 0 01-5.146-5.146 5.139 5.139 0 015.146-5.146 5.139 5.139 0 015.146 5.146 5.139 5.139 0 01-5.146 5.146z"
      fill={fill}
    />
  </svg>
);
