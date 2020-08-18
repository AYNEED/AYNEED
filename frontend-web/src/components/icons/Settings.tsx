import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  firstColor?: COLOR;
  secondColor?: COLOR;
  width?: number;
  height?: number;
  cropped?: boolean;
};

export const Settings: React.FC<Props> = ({
  firstColor = COLOR.PRIMARY_100,
  secondColor = COLOR.PRIMARY_300,
  width = 96,
  height = 18,
  cropped = false,
}) => {
  width = cropped ? 50 : width;

  return (
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
        d="M17 12a5 5 0 11-10 0 5 5 0 0110 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0z"
        fill="url(#paint_linear)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 0a3 3 0 00-3 3v.2l-1.7 1V4A3 3 0 002 5.1L1.1 7a3 3 0 001.1 4l.1.1v2A3 3 0 001 17.1l1 1.8a3 3 0 004.1 1h.1l1.7 1v.1a3 3 0 003 3h2a3 3 0 003-3v-.2l1.7-1v.2a3 3 0 004.2-1.1l1-1.8a3 3 0 00-1.1-4l-.1-.1v-2A3 3 0 0023 6.9l-1-1.8a3 3 0 00-4.1-1h-.1l-1.7-1V3a3 3 0 00-3-3h-2zm-1 3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v.7c0 .4.2.7.5.9l2.7 1.5c.3.2.7.2 1 0l.6-.3a1 1 0 011.4.3l1 1.8c.2.4 0 1-.4 1.3l-.6.4a1 1 0 00-.5.9v3c0 .4.2.7.5.9l.6.4c.5.2.6.9.4 1.3l-1 1.8a1 1 0 01-1.4.3l-.6-.3a1 1 0 00-1 0l-2.7 1.5a1 1 0 00-.5.9v.7c0 .6-.4 1-1 1h-2a1 1 0 01-1-1v-.7a1 1 0 00-.5-.9l-2.7-1.5a1 1 0 00-1 0l-.6.3a1 1 0 01-1.4-.3l-1-1.8a1 1 0 01.4-1.3l.6-.4c.4-.2.5-.5.5-.9v-3a1 1 0 00-.5-.9l-.6-.4A1 1 0 012.8 8l1-1.8a1 1 0 011.4-.3l.6.3c.3.2.7.2 1 0l2.7-1.5c.3-.2.5-.5.5-.9V3z"
        fill="url(#paint_linear)"
      />

      <defs>
        <linearGradient
          id="paint_linear"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={firstColor} />
          <stop offset="1" stop-color={secondColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};
