import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const LinkedIn: React.FC<Props> = ({ 
  fill = COLOR.SECONDARY_100,
  width=24,
  height=24
}) => (
  <svg 
    width={width}
    height={height}
    fill="none" 
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.75048 7.39822C5.97509 7.60666 7.04336 7.00739 7.30391 5.96517C7.64263 4.58424 6.67858 3.41174 5.21948 3.4378C4.25543 3.41174 3.49982 3.88074 3.18716 4.6624C2.71816 5.91306 3.44771 7.18978 4.75048 7.39822Z"
      fill={fill}
    />
    <path
      d="M20.6703 20.5572C19.5759 20.5312 18.5077 20.5312 17.4133 20.5572C17.1788 20.5572 17.1267 20.5051 17.1267 20.2706V14.4603C17.1267 14.0173 17.1007 13.5744 16.9704 13.1575C16.5796 11.8026 15.0162 11.3075 13.8959 12.2195C13.2966 12.6885 13.0621 13.3399 13.0621 14.1215V19.5932C13.0621 19.6704 13.0593 19.7476 13.0564 19.8258C13.0506 19.9849 13.0446 20.148 13.0621 20.3227C13.0881 20.5312 12.9839 20.5833 12.8015 20.5572H9.46645C9.258 20.5572 9.20589 20.5051 9.20589 20.2967C9.23195 18.6552 9.23195 17.0137 9.23195 15.3461C9.23195 13.3138 9.23195 11.2815 9.20589 9.27523C9.20589 9.04073 9.258 8.98862 9.46645 8.98862H12.8015C13.01 8.98862 13.0621 9.04073 13.0621 9.24917V10.578L13.1924 10.4477C14.2085 8.96256 15.6416 8.54568 17.3352 8.80623C19.2893 9.1189 20.54 10.4738 20.8527 12.5582C20.9308 13.0533 20.9569 13.5483 20.9569 14.0434V20.2706C20.9569 20.479 20.9048 20.5572 20.6703 20.5572Z"
      fill={fill}
    />
    <path
      d="M7.12132 14.7731V20.2448C7.12132 20.4793 7.06921 20.5574 6.83471 20.5574C6.10516 20.5401 5.37561 20.5459 4.64606 20.5517C4.28128 20.5546 3.91651 20.5574 3.55173 20.5574C3.34329 20.5574 3.29118 20.5053 3.29118 20.2969V9.2494C3.29118 9.06702 3.34329 8.98885 3.55173 8.98885H6.91288C7.14738 8.98885 7.17343 9.06702 7.17343 9.27546C7.12132 11.0993 7.12132 12.9232 7.12132 14.7731Z"
      fill={fill}
    />
  </svg>
);
