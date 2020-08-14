import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  firstGradientColor?: COLOR;
  secondGradientColor?: COLOR;
  width?: number;
  height?: number;
};


export const LogoAYNeed: React.FC<Props> = ({
  firstGradientColor = '#015496', 
  secondGradientColor = '#09BDD0',
  width = 96,
  height = 96
}) => (
  <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M13.3 14H5l-1.3 3a1.5 1.5 0 11-2.7-1.2L7.1 2.2A2 2 0 018.9 1h.5a2 2 0 011.8 1.2l6.1 13.6a1.5 1.5 0 11-2.7 1.2l-1.3-3zm-1-2.5L9 4.1l-3.2 7.4h6.4z" 
      fill="url(#paint_linear)"
    />
    <path 
      d="M26.7 12v4.3a1.6 1.6 0 11-3.2 0V12l-5.3-8.8a1.4 1.4 0 112.5-1.5l4.5 7.5 4.6-7.6A1.3 1.3 0 0132.1 3l-5.4 9z" 
      fill="url(#paint_linear)"
    />
    <path 
      d="M48.5 1c.9 0 1.5.7 1.5 1.6V16a1.7 1.7 0 01-3 1.1L38.1 6.4v9.9a1.6 1.6 0 01-3.1 0V2.8a1.7 1.7 0 013-1.1L47 12.4V2.6c0-.9.7-1.6 1.6-1.6z"
      fill="url(#paint_linear)"
    />
    <path 
      d="M66 11.6c0 .3-.3.6-.7.6h-9.7a4 4 0 001.5 2.8 5 5 0 003.1 1 5 5 0 002.9-.8c.5-.4 1.2-.4 1.6 0 .3.5.3 1 0 1.3l-1.7 1c-.8.3-1.8.5-2.8.5-1.4 0-2.6-.3-3.6-.8a6 6 0 01-2.4-2.4 6.8 6.8 0 010-6.7 6 6 0 012.2-2.3c1-.5 2-.8 3.3-.8 1.2 0 2.3.3 3.3.8 1 .6 1.7 1.3 2.2 2.3a7 7 0 01.8 3.5zm-6.3-4.7A4 4 0 0057 8c-.7.7-1.1 1.6-1.3 2.7h8.2a4 4 0 00-4-3.7z"
      fill="url(#paint_linear)"
    />
    <path 
      d="M80.8 11.6c0 .3-.4.6-.8.6h-9.6a4 4 0 001.4 2.8 5 5 0 003.2 1 5 5 0 002.8-.8c.5-.4 1.2-.4 1.6 0 .3.5.3 1 0 1.3l-1.6 1c-.9.3-1.8.5-2.9.5-1.3 0-2.5-.3-3.6-.8a6 6 0 01-2.4-2.4 6.8 6.8 0 010-6.7 6 6 0 012.3-2.3c1-.5 2-.8 3.3-.8 1.2 0 2.3.3 3.2.8 1 .6 1.7 1.3 2.2 2.3a7 7 0 01.9 3.5zm-6.3-4.7a4 4 0 00-2.8 1c-.8.7-1.2 1.6-1.3 2.7h8.1a4 4 0 00-4-3.7z"
      fill="url(#paint_linear)"
    />
    <path 
      d="M94.8 0c.7 0 1.2.5 1.2 1.2v15.5a1.1 1.1 0 01-2.2 0v-.9a5 5 0 01-2 1.6 6.7 6.7 0 01-6-.3 6 6 0 01-2.2-2.2 7 7 0 01-.8-3.4c0-1.3.3-2.4.8-3.4a6 6 0 012.3-2.3 6.7 6.7 0 015.9-.3c.7.3 1.4.9 1.9 1.5V1.2c0-.7.5-1.2 1.1-1.2zm-5.4 16c.8 0 1.6-.2 2.2-.6a4 4 0 001.6-1.6 5 5 0 00.5-2.3c0-.9-.2-1.7-.5-2.4A4.4 4.4 0 0089.5 7c-.9 0-1.6.2-2.3.6A4 4 0 0085.7 9c-.4.7-.6 1.5-.6 2.4 0 .9.2 1.6.6 2.3.4.7.9 1.2 1.5 1.6.7.4 1.4.6 2.2.6z"
      fill="url(#paint_linear)"
    />
    <defs>
      <linearGradient 
        id="paint_linear" 
        x1="0" 
        y1="9" 
        x2="96" 
        y2="9" 
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color={firstGradientColor}/>
        <stop offset="1" stop-color={secondGradientColor}/>
      </linearGradient>
    </defs>
  </svg>
);
