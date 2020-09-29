import React from 'react';

import { IconBaseProps } from 'src/types';

export const CloseMini: React.FC<IconBaseProps> = ({
  fill,
  width = 10,
  height = 10,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 10"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.17376 0.755197C8.78629 0.367734 8.15809 0.367734 7.77063 0.755197L4.96432 3.56151L2.15808 0.755267C1.77062 0.367804 1.14242 0.367804 0.754953 0.755267C0.36749 1.14273 0.36749 1.77093 0.754953 2.1584L3.56119 4.96463L0.754982 7.77084C0.367518 8.15831 0.367518 8.78651 0.754982 9.17397C1.14245 9.56144 1.77065 9.56144 2.15811 9.17397L4.96432 6.36776L7.7706 9.17404C8.15806 9.56151 8.78626 9.56151 9.17373 9.17404C9.56119 8.78658 9.56119 8.15838 9.17373 7.77091L6.36745 4.96463L9.17376 2.15833C9.56122 1.77086 9.56122 1.14266 9.17376 0.755197Z"
      fill={fill}
    />
  </svg>
);
