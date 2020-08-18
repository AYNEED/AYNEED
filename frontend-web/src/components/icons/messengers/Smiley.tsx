import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Smiley: React.FC<Props> = ({
  fill = COLOR.SECONDARY_100,
  width = 25,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 10C8.32843 10 9 9.32843 9 8.5C9 7.67157 8.32843 7 7.5 7C6.67157 7 6 7.67157 6 8.5C6 9.32843 6.67157 10 7.5 10Z"
      fill={fill}
    />
    <path
      d="M18 8.5C18 9.32843 17.3284 10 16.5 10C15.6716 10 15 9.32843 15 8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5Z"
      fill={fill}
    />
    <path
      d="M7.76567 14.8568C7.41042 14.4339 6.77963 14.3791 6.35676 14.7343C5.9339 15.0896 5.87908 15.7204 6.23433 16.1432C7.65793 17.8378 9.48058 19 11.9988 19C14.5167 19 16.3418 17.8382 17.7657 16.1432C18.1209 15.7204 18.0661 15.0896 17.6432 14.7343C17.2204 14.3791 16.5896 14.4339 16.2343 14.8568C15.0901 16.2188 13.7859 17 11.9988 17C10.2121 17 8.91021 16.2192 7.76567 14.8568Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      fill={fill}
    />
  </svg>
);