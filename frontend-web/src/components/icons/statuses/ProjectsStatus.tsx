import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const ProjectsStatus: React.FC<Props> = ({
  fill = COLOR.SECONDARY_100,
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 0H4a4 4 0 00-4 4v2a4 4 0 004 4h2a4 4 0 004-4V4a4 4 0 00-4-4zM2 4c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm4 10H4a4 4 0 00-4 4v2a4 4 0 004 4h2a4 4 0 004-4v-2a4 4 0 00-4-4zm-4 4c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zM18 0h2a4 4 0 014 4v2a4 4 0 01-4 4h-2a4 4 0 01-4-4V4a4 4 0 014-4zm0 2a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2a2 2 0 002-2V4a2 2 0 00-2-2h-2zm2 12h-2a4 4 0 00-4 4v2a4 4 0 004 4h2a4 4 0 004-4v-2a4 4 0 00-4-4zm-4 4c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      fill={fill}
    />
  </svg>
);
