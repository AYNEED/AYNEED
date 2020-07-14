import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
};

export const Facebook: React.FC<Props> = ({ fill = COLOR.PRIMARY_500 }) => (
  <svg width="18" height="18" fill="none">
    <path
      d="M9.842 17V9.245h2.653l.398-3.022H9.841v-1.93c0-.874.247-1.47 1.527-1.47L13 2.822V.119A22.284 22.284 0 0010.623 0C8.27 0 6.66 1.408 6.66 3.995v2.228H4v3.022h2.66V17h3.182z"
      fill={fill}
    />
  </svg>
);
