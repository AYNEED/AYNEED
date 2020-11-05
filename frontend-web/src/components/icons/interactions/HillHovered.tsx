import React from 'react';

import { IconBaseProps } from 'src/types';

export const HillHovered: React.FC<IconBaseProps> = ({
  fill,
  width = 19,
  height = 194,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 164"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 164V156V8V0C0 4.41827 4.25329 8 9.5 8H11C15.4183 8 19 11.5817 19 16V148C19 152.418 15.4183 156 11 156H9.5C4.25329 156 0 159.582 0 164Z"
        fill="white"
      />
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.45378 74.0433C6.93207 73.7672 7.54366 73.9311 7.8198 74.4093L11.9117 81.4967C11.995 81.641 12.0383 81.7974 12.0449 81.953C12.0545 82.1391 12.0122 82.33 11.9121 82.5034L7.82048 89.5903C7.54433 90.0686 6.93274 90.2325 6.45445 89.9564C5.97616 89.6802 5.81228 89.0686 6.08843 88.5903L9.89311 82.0004L6.08775 75.4093C5.81161 74.9311 5.97549 74.3195 6.45378 74.0433Z"
      fill="#86A3C6"
    />
    <defs>
      <filter
        id="filter0_i"
        x="0"
        y="0"
        width="20"
        height="164"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" />
        <feGaussianBlur stdDeviation="2.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.2 0 0 0 0 0.301961 0 0 0 0 0.431373 0 0 0 0.2 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </svg>
);
