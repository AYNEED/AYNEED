import React from 'react';
import { COLOR } from 'src/constants/colors';

import { IconBaseProps } from 'src/types';

export const VK: React.FC<IconBaseProps> = ({
  fill = COLOR.PRIMARY_200,
  width = 24,
  height = 24,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.8134 6.23557C22.971 5.71522 22.8134 5.33276 22.0634 5.33276H19.5837C18.9531 5.33276 18.6626 5.66311 18.505 6.0275C18.505 6.0275 17.2438 9.07189 15.4574 11.0494C14.8794 11.6219 14.6167 11.8038 14.3015 11.8038C14.1438 11.8038 13.9157 11.6219 13.9157 11.1015V6.23557C13.9157 5.61101 13.7327 5.33276 13.2072 5.33276H9.31043C8.91651 5.33276 8.67951 5.62259 8.67951 5.89733C8.67951 6.48943 9.57258 6.62592 9.66468 8.29118V11.9082C9.66468 12.7012 9.52015 12.845 9.20487 12.845C8.36423 12.845 6.3195 9.7868 5.10655 6.28768C4.86885 5.6075 4.63044 5.33276 3.99669 5.33276H1.51695C0.808448 5.33276 0.666748 5.66311 0.666748 6.0275C0.666748 6.67803 1.50756 9.90469 4.5812 14.1721C6.63054 17.0861 9.51731 18.6661 12.1444 18.6661C13.7208 18.6661 13.9157 18.3152 13.9157 17.7108V15.5082C13.9157 14.8064 14.065 14.6664 14.564 14.6664C14.932 14.6664 15.5624 14.8486 17.0338 16.2536C18.715 17.9187 18.9921 18.6661 19.9379 18.6661H22.4177C23.1262 18.6661 23.4804 18.3152 23.276 17.6228C23.0525 16.9326 22.2497 15.9315 21.1845 14.7445C20.6066 14.0679 19.7395 13.3393 19.477 12.975C19.1091 12.5066 19.2142 12.2986 19.477 11.8824C19.477 11.8824 22.4981 7.66697 22.8134 6.23575V6.23557Z"
      fill={fill}
    />
  </svg>
);
