import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Instagram: React.FC<Props> = ({ 
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
      d="M8.44473 11.9994C8.44473 10.0358 10.0362 8.44359 11.9999 8.44359C13.9635 8.44359 15.5558 10.0358 15.5558 11.9994C15.5558 13.963 13.9635 15.5553 11.9999 15.5553C10.0362 15.5553 8.44473 13.963 8.44473 11.9994ZM6.52243 11.9994C6.52243 15.0245 8.97467 17.4766 11.9999 17.4766C15.025 17.4766 17.4773 15.0245 17.4773 11.9994C17.4773 8.97436 15.025 6.52222 11.9999 6.52222C8.97467 6.52222 6.52243 8.97436 6.52243 11.9994ZM16.4141 6.30505C16.414 6.55821 16.4889 6.80572 16.6295 7.01627C16.7701 7.22682 16.9699 7.39096 17.2038 7.48793C17.4377 7.58491 17.695 7.61036 17.9433 7.56107C18.1917 7.51178 18.4198 7.38996 18.5989 7.21102C18.778 7.03208 18.9 6.80406 18.9495 6.55578C18.999 6.30751 18.9737 6.05013 18.8769 5.8162C18.7801 5.58227 18.6162 5.3823 18.4057 5.24157C18.1953 5.10083 17.9478 5.02566 17.6946 5.02556H17.6941C17.3548 5.02572 17.0294 5.16056 16.7893 5.40046C16.5493 5.64036 16.4144 5.96571 16.4141 6.30505ZM7.69035 20.6818C6.65035 20.6345 6.08508 20.4613 5.70943 20.3149C5.2114 20.121 4.85606 19.8901 4.48246 19.517C4.10885 19.144 3.87759 18.789 3.68456 18.291C3.53812 17.9155 3.36489 17.3501 3.31761 16.3101C3.2659 15.1858 3.25557 14.848 3.25557 11.9995C3.25557 9.151 3.26675 8.81419 3.31761 7.6889C3.36497 6.64894 3.53949 6.08464 3.68456 5.70806C3.87844 5.21005 4.10937 4.85473 4.48246 4.48114C4.85555 4.10755 5.21055 3.87629 5.70943 3.68327C6.08491 3.53684 6.65035 3.36361 7.69035 3.31634C8.81475 3.26462 9.15251 3.2543 11.9999 3.2543C14.8472 3.2543 15.1853 3.26548 16.3106 3.31634C17.3506 3.3637 17.915 3.5382 18.2916 3.68327C18.7896 3.87629 19.1449 4.10806 19.5185 4.48114C19.8921 4.85421 20.1225 5.21005 20.3164 5.70806C20.4629 6.08353 20.6361 6.64894 20.6834 7.6889C20.7351 8.81419 20.7454 9.151 20.7454 11.9995C20.7454 14.848 20.7351 15.1848 20.6834 16.3101C20.636 17.3501 20.4619 17.9153 20.3164 18.291C20.1225 18.789 19.8916 19.1443 19.5185 19.517C19.1454 19.8898 18.7896 20.121 18.2916 20.3149C17.9161 20.4613 17.3506 20.6346 16.3106 20.6818C15.1862 20.7336 14.8485 20.7439 11.9999 20.7439C9.15123 20.7439 8.81441 20.7336 7.69035 20.6818ZM7.60203 1.39736C6.46645 1.44907 5.69048 1.62913 5.01283 1.89281C4.31102 2.1651 3.7169 2.53042 3.12321 3.12314C2.52953 3.71587 2.16514 4.3109 1.89283 5.01268C1.62914 5.69074 1.44908 6.46625 1.39736 7.60178C1.3448 8.7391 1.33276 9.1027 1.33276 11.9994C1.33276 14.8962 1.3448 15.2598 1.39736 16.3971C1.44908 17.5327 1.62914 18.3081 1.89283 18.9862C2.16514 19.6875 2.52961 20.2832 3.12321 20.8757C3.71682 21.4682 4.31102 21.833 5.01283 22.1061C5.69176 22.3697 6.46645 22.5498 7.60203 22.6015C8.73999 22.6532 9.10302 22.6661 11.9999 22.6661C14.8967 22.6661 15.2603 22.6541 16.3977 22.6015C17.5333 22.5498 18.3088 22.3697 18.9869 22.1061C19.6883 21.833 20.2828 21.4684 20.8765 20.8757C21.4702 20.283 21.8338 19.6875 22.1069 18.9862C22.3706 18.3081 22.5515 17.5326 22.6023 16.3971C22.6541 15.2589 22.6661 14.8962 22.6661 11.9994C22.6661 9.1027 22.6541 8.7391 22.6023 7.60178C22.5506 6.46616 22.3706 5.69031 22.1069 5.01268C21.8338 4.31132 21.4692 3.71681 20.8765 3.12314C20.2838 2.52948 19.6883 2.1651 18.9877 1.89281C18.3088 1.62913 17.5333 1.44822 16.3985 1.39736C15.2612 1.34565 14.8976 1.33276 12.0007 1.33276C9.10387 1.33276 8.73999 1.3448 7.60203 1.39736Z"
      fill={fill}
    />
  </svg>
);
