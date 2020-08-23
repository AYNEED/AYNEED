import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Error404: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_500,
  width = 602,
  height = 194,
}) => (
  <svg width={width} height={height} fill="none">
    <g filter="url(#filter0_dd)" fill={fill}>
      <path d="M169.788 144.033a5 5 0 01-5 5h-14.602a5 5 0 00-5 5v21.659a5 5 0 01-5 5h-35.657a5 5 0 01-5-5v-21.659a5 5 0 00-5-5H17a5 5 0 01-5-5v-23.866c0-1.048.33-2.07.941-2.92l71.844-99.86a5 5 0 014.059-2.08h36.348c4.041 0 6.413 4.547 4.1 7.862l-56.451 80.91c-2.313 3.314.059 7.861 4.1 7.861h19.007a5 5 0 005-5V88.824a5 5 0 015-5h34.238a5 5 0 015 5v18.116a5 5 0 005 5h14.602a5 5 0 015 5v27.093zM299.708 184c-14.194 0-26.81-3.386-37.85-10.159-11.04-6.773-19.714-16.618-26.022-29.533-6.151-13.074-9.226-28.509-9.226-46.308s3.075-33.156 9.226-46.071c6.308-13.074 14.982-22.997 26.022-29.77C272.898 15.387 285.514 12 299.708 12c14.036 0 26.574 3.386 37.614 10.16 11.04 6.772 19.635 16.695 25.785 29.769C369.416 64.844 372.57 80.2 372.57 98s-3.154 33.234-9.463 46.308c-6.15 12.915-14.745 22.76-25.785 29.533-11.04 6.773-23.578 10.159-37.614 10.159zm0-38.275c7.886 0 14.115-3.78 18.689-11.34 4.731-7.718 7.097-19.847 7.097-36.385 0-16.538-2.366-28.588-7.097-36.148-4.574-7.718-10.803-11.577-18.689-11.577-8.043 0-14.43 3.859-19.161 11.577-4.574 7.56-6.861 19.61-6.861 36.148 0 16.538 2.287 28.667 6.861 36.385 4.731 7.56 11.118 11.34 19.161 11.34zM592 144.033a5 5 0 01-5 5h-14.603a5 5 0 00-5 5v21.659a5 5 0 01-5 5H526.74a5 5 0 01-5-5v-21.659a5 5 0 00-5-5h-77.528a5 5 0 01-5-5v-23.866c0-1.048.329-2.07.941-2.92l71.843-99.86a5.001 5.001 0 014.059-2.08h36.348c4.042 0 6.413 4.547 4.101 7.862l-56.452 80.91c-2.312 3.314.059 7.861 4.101 7.861h19.007a5 5 0 005-5V88.824a5 5 0 015-5h34.237a5 5 0 015 5v18.116a5 5 0 005 5H587a5 5 0 015 5v27.093z" />
    </g>
    <defs>
      <filter
        id="filter0_dd"
        x="0"
        y="0"
        width="602"
        height="194"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="-4" dy="-4" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix values="0 0 0 0 0.564706 0 0 0 0 0.627451 0 0 0 0 0.717647 0 0 0 0.21 0" />
        <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);
