import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Telegram: React.FC<IconBaseProps> = ({
  fill = COLOR.SECONDARY_100,
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"

  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0414 20.2573C18.207 20.7672 18.644 19.6988 18.644 19.6988L21.7279 4.20669C21.7036 3.16255 20.2952 3.79389 20.2952 3.79389L3.0305 10.5687C3.0305 10.5687 2.2049 10.8601 2.27775 11.37C2.35059 11.8799 3.00622 12.1227 3.00622 12.1227L7.35275 13.5797C7.35275 13.5797 8.664 17.8776 8.9311 18.7032C9.17393 19.5046 9.39247 19.5288 9.39247 19.5288C9.63529 19.626 9.85383 19.456 9.85383 19.456L12.6706 16.9063L17.0414 20.2573ZM17.7944 6.95083C17.7944 6.95083 18.4015 6.58659 18.3772 6.95083C18.3772 6.95083 18.4743 6.99939 18.1587 7.33935C17.8673 7.63073 10.9954 13.7984 10.0726 14.624C9.99979 14.6726 9.95123 14.7455 9.95123 14.8426L9.68412 17.1251C9.63556 17.3679 9.31989 17.3922 9.24704 17.1737L8.10577 13.4342C8.05721 13.2885 8.10577 13.1185 8.25146 13.0214L17.7944 6.95083Z"
      fill={fill}
    />
  </svg>
);
