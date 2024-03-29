import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const ExclamationPoint: React.FC<IconBaseProps> = ({
  fill = COLOR.RED,
  width = 16,
  height = 16,
}) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M9.1964 3.84H6.8156L7.2124 9.6896H8.7996L9.1964 3.84Z"
      fill={fill}
    />
    <path
      d="M7.1228 12.5696C7.36173 12.7915 7.65613 12.9024 8.006 12.9024C8.35587 12.9024 8.646 12.7915 8.8764 12.5696C9.11533 12.3392 9.2348 12.0619 9.2348 11.7376C9.2348 11.4133 9.1196 11.1445 8.8892 10.9312C8.6588 10.7093 8.3644 10.5984 8.006 10.5984C7.6476 10.5984 7.3532 10.7093 7.1228 10.9312C6.8924 11.1445 6.7772 11.4133 6.7772 11.7376C6.7772 12.0619 6.8924 12.3392 7.1228 12.5696Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM14.64 8C14.64 11.6672 11.6672 14.64 8 14.64C4.33283 14.64 1.36 11.6672 1.36 8C1.36 4.33283 4.33283 1.36 8 1.36C11.6672 1.36 14.64 4.33283 14.64 8Z"
      fill={fill}
    />
  </svg>
);
