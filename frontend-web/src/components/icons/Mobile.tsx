import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
};

export const Mobile: React.FC<Props> = ({ fill = COLOR.WHITE }) => (
  <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
    <path
      d="M0 0.571429C0 0.255838 0.223858 0 0.5 0H3.5C3.77614 0 4 0.255837 4 0.571429V7.42857C4 7.74416 3.77614 8 3.5 8H0.5C0.223858 8 0 7.74416 0 7.42857V0.571429Z"
      fill={fill}
    />
  </svg>
);
