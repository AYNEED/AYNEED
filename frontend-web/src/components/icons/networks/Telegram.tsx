import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
};

export const Telegram: React.FC<Props> = ({ fill = COLOR.PRIMARY_500 }) => (
  <svg width="18" height="18" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.076 15.49c.874.382 1.202-.42 1.202-.42l2.313-11.619c-.018-.783-1.075-.31-1.075-.31L2.569 8.224s-.62.218-.565.6c.055.383.547.566.547.566l3.26 1.092s.983 3.224 1.183 3.843c.183.6.346.62.346.62.183.072.346-.056.346-.056l2.113-1.912 3.278 2.513zm.565-9.98s.455-.274.437 0c0 0 .073.036-.164.29-.219.22-5.373 4.845-6.065 5.464a.191.191 0 00-.09.164l-.201 1.712c-.036.182-.273.2-.328.037l-.856-2.805a.268.268 0 01.11-.31L13.64 5.51z"
      fill={fill}
    />
  </svg>
);
