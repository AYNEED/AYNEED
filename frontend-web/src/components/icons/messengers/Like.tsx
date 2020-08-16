import React from 'react';

import { COLOR } from 'src/constants/colors';

type Props = {
  fill?: COLOR;
  width?: number;
  height?: number;
};

export const Like: React.FC<Props> = ({
  fill = COLOR.SECONDARY_100,
  width = 25,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2541 3.3066C12.0109 3.12207 11.6616 2.98333 11.1138 3.00159C11.1027 3.00196 11.0916 3.00215 11.0805 3.00215C11.0342 3.00215 10.9856 3.00437 10.9353 3.00833C11.1349 6.07116 9.7241 8.17627 8.26092 9.53494C8.25121 9.54396 8.24132 9.55278 8.23126 9.5614C7.04874 10.575 5.74485 11.1946 4.98047 11.5168V19.3167L8.31742 20.1306C8.38638 20.1474 8.45304 20.1715 8.51636 20.2021H16.9805C17.0463 20.2021 17.112 20.2087 17.1766 20.2216C17.3034 20.2469 17.4311 20.2466 17.5411 20.2283C17.6567 20.209 17.7165 20.1763 17.7258 20.1701C17.7603 20.1471 17.7962 20.1263 17.8333 20.1077C17.9615 20.0436 18.034 19.9654 18.2101 19.7046C18.3078 19.4906 18.3703 19.2333 18.4502 18.9047C18.4621 18.8556 18.4744 18.8048 18.4874 18.7523C18.5324 18.2644 18.7925 17.8759 19.0734 17.595C19.1697 17.4987 19.2945 17.2596 19.3805 16.969V16.4232C19.3078 16.0436 19.3938 15.7011 19.5076 15.4508C19.6367 15.1668 19.8235 14.9449 19.9734 14.795C20.0252 14.7432 20.0615 14.7068 20.0924 14.6747C20.1222 14.6437 20.1391 14.6248 20.1497 14.612C20.1628 14.5963 20.1705 14.5861 20.186 14.5549C20.2046 14.5178 20.2254 14.4819 20.2484 14.4474C20.257 14.4345 20.2632 14.4231 20.2691 14.3877C20.2782 14.3327 20.2805 14.2654 20.2805 14.1021C20.2805 13.9937 20.243 13.852 20.1318 13.5184C19.9634 13.0131 19.9634 12.4912 20.1318 11.9859C20.1513 11.9273 20.1763 11.8705 20.2063 11.8165C20.5994 11.1089 20.478 10.7083 20.423 10.6166C20.4098 10.5947 20.3975 10.5723 20.386 10.5494C20.354 10.4853 20.2564 10.3616 20.0093 10.2204C19.7685 10.0828 19.4438 9.96284 19.0635 9.87833L19.0556 9.87657C17.8555 9.59961 16.4593 9.50737 15.3635 9.59869C15.3359 9.60099 15.3082 9.60215 15.2805 9.60215C14.782 9.60215 14.2033 9.43923 13.7734 9.00925C13.3434 8.57928 13.1805 8.00062 13.1805 7.50215C13.1805 7.47192 13.1818 7.44171 13.1846 7.41161C13.2795 6.36697 13.2405 5.14749 12.8963 4.24651C12.7293 3.80935 12.5111 3.50157 12.2541 3.3066ZM3.87497 9.80764C4.48498 9.56413 5.77692 9.02593 6.91461 8.05577C8.14592 6.90707 9.23304 5.21277 8.88924 2.63431C8.8834 2.5905 8.88047 2.54634 8.88047 2.50215C8.88047 2.2157 8.95929 1.90908 9.1746 1.63995C9.36132 1.40655 9.5926 1.27804 9.73325 1.20772C9.85306 1.14782 9.98348 1.11269 10.1167 1.10418C10.1236 1.10314 10.1334 1.10161 10.147 1.09941C10.1589 1.09747 10.1753 1.09475 10.1945 1.09155C10.2415 1.08372 10.3058 1.07302 10.3659 1.06377C10.5422 1.03665 10.7939 1.00355 11.0633 1.00219C12.0086 0.973781 12.8162 1.22251 13.463 1.71331C14.0998 2.19647 14.5066 2.85744 14.7646 3.53278C15.2616 4.83373 15.2809 6.38234 15.1817 7.53192C15.1838 7.5553 15.188 7.57509 15.1926 7.59001C15.2081 7.59482 15.2288 7.59916 15.2533 7.60109C16.546 7.50013 18.1224 7.6091 19.5014 7.92684C20.0198 8.04237 20.5436 8.22221 21.0016 8.4839C21.4448 8.73717 21.8875 9.10288 22.1574 9.62059C22.6626 10.4949 22.5618 11.6304 22.0126 12.6803C21.9992 12.7491 22.0047 12.8125 22.0292 12.8859C22.0337 12.8996 22.0385 12.9138 22.0434 12.9285C22.1342 13.1995 22.2805 13.6359 22.2805 14.1021C22.2805 14.1145 22.2805 14.1275 22.2805 14.141C22.2814 14.4252 22.283 14.9647 21.9473 15.503C21.7804 15.8172 21.5906 16.0066 21.4131 16.1837C21.4046 16.1923 21.3961 16.2008 21.3876 16.2093C21.3839 16.2129 21.3804 16.2165 21.3771 16.22C21.3793 16.2473 21.3805 16.2747 21.3805 16.3021V17.1021C21.3805 17.1839 21.3704 17.2654 21.3506 17.3447C21.2353 17.8057 20.9794 18.5175 20.4876 19.0093C20.4821 19.0147 20.4772 19.0198 20.473 19.0243C20.468 19.0648 20.4605 19.105 20.4506 19.1447C20.4388 19.1919 20.4259 19.2463 20.4116 19.3065C20.3287 19.656 20.1998 20.1996 19.9749 20.6494C19.9564 20.6864 19.9355 20.7223 19.9125 20.7568C19.9058 20.767 19.8988 20.7774 19.8917 20.7881C19.6996 21.0771 19.3856 21.5494 18.7804 21.8695C18.2574 22.1945 17.5538 22.3094 16.8917 22.2021H8.28047C8.28002 22.2021 8.27925 22.2022 8.27817 22.2022C8.26355 22.2023 8.1928 22.2027 8.12159 22.1956C8.0177 22.1852 7.8806 22.1577 7.73325 22.0841C7.69157 22.0632 7.65399 22.0411 7.62078 22.0193L3.74351 21.0737C3.29563 20.9644 2.98047 20.5632 2.98047 20.1021V10.8021C2.98047 10.2855 3.37228 9.86035 3.87497 9.80764ZM10.1041 1.106C10.0998 1.10655 10.1007 1.10631 10.1058 1.10576L10.1041 1.106Z"
      fill={fill}
    />
  </svg>
);
