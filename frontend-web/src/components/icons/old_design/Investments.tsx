import React from 'react';

import { COLOR } from 'src/constants/colors';
import { IconBaseProps } from 'src/types';

export const Investments: React.FC<IconBaseProps> = ({
  fill = COLOR.PRIMARY_500,
  width = 36,
  height = 44,
}) => (
  <svg width={width} height={height} viewBox="0 0 36 44" fill="none">
    <mask
      id="path-1-outside-1"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="36"
      height="44"
      fill="black"
    >
      <rect fill="white" width="36" height="44" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.7621 34.897C32.509 35.5199 34.3968 37.2512 34.9724 39.3102C34.999 39.4047 35.0064 39.5036 34.9945 39.601C34.8676 40.6047 32.9592 42.9368 18 42.9368C3.04084 42.9368 1.13239 40.6047 1.00545 39.601C0.993642 39.5036 1.00102 39.4047 1.02759 39.3102C1.60323 37.2527 3.49102 35.5199 4.23787 34.897C3.96924 21.7474 10.9684 15.3623 13.113 13.7166C9.51306 7.96759 9.17653 3.43925 9.16325 3.24295C9.14406 2.96399 9.28723 2.69536 9.53077 2.55661C15.0716 -0.65219 21.5586 2.07544 21.8317 2.19352C22.1342 2.32193 22.3143 2.63632 22.273 2.96251C22.2538 3.1042 22.2302 3.24738 22.2007 3.39793C26.1475 3.01122 27.9364 4.56839 28.0161 4.64071C28.2316 4.83407 28.3142 5.13369 28.2286 5.40823C27.1659 8.82219 24.2375 12.3852 22.9918 13.7948C25.2456 15.5586 32.0278 21.9511 31.7621 34.897ZM2.55081 39.3944C3.09545 39.8578 5.85998 41.4608 18 41.4608C30.14 41.4608 32.9045 39.8578 33.4492 39.3929C32.7392 37.4726 30.5976 35.8505 30.574 35.8328C30.3806 35.6882 30.2714 35.4609 30.2788 35.2188C30.7245 20.6404 21.5867 14.5889 21.4937 14.5284C21.3077 14.4103 21.1837 14.214 21.1586 13.9955C21.1335 13.7771 21.2044 13.5572 21.3564 13.3992C21.3569 13.3987 21.3581 13.3974 21.3599 13.3955C21.4963 13.2505 25.2479 9.25931 26.6404 5.49531C25.9674 5.13517 24.3984 4.5551 21.7549 4.93886C21.0154 7.00967 19.7904 9.15134 19.7225 9.26941C19.5173 9.62513 19.0627 9.74321 18.7144 9.541C18.3601 9.33879 18.2376 8.88566 18.4413 8.53437C18.442 8.5332 18.4445 8.52873 18.4488 8.52111C18.5743 8.2989 20.213 5.39699 20.6996 3.34774C19.1557 2.82377 14.6303 1.59279 10.6894 3.60457C10.8769 4.8931 11.6651 8.75577 14.617 13.3254C15.1617 13.5498 16.9417 14.1977 18.6804 13.7948C19.0819 13.6915 19.4745 13.9468 19.5675 14.3424C19.662 14.7409 19.4155 15.138 19.0184 15.2309C18.5018 15.352 17.9867 15.4007 17.4923 15.4007C16.0635 15.4007 14.8237 14.9948 14.2038 14.7527C12.6525 15.9114 5.32124 22.1091 5.72124 35.2203C5.72862 35.4623 5.61792 35.6896 5.42752 35.8343C5.42706 35.8346 5.42572 35.8357 5.42352 35.8374C5.31809 35.9189 3.24478 37.5221 2.55081 39.3944ZM22.6924 23.8583C22.4503 24.1845 21.9883 24.2479 21.6592 24.0029C21.6179 23.9705 17.398 20.8428 15.2785 23.4981C14.8696 24.0088 14.7294 24.4811 14.849 24.9402C15.1028 25.9055 16.5449 27.0036 18.7102 27.8774C20.2393 28.4944 21.885 29.3165 22.4784 30.732C22.8149 31.5364 22.775 32.4471 22.3618 33.4419C22.0208 34.2611 21.1263 34.9297 19.9706 35.2293C19.6902 35.3031 19.2563 35.3695 18.7382 35.3931V36.8839C18.7382 37.2927 18.4076 37.6219 18.0002 37.6219C17.5928 37.6219 17.2622 37.2927 17.2622 36.8839V35.2987C15.9988 35.0817 14.4313 34.4913 12.6911 33.1275C12.3708 32.8736 12.3147 32.4102 12.5656 32.0899C12.8165 31.7666 13.2785 31.715 13.6018 31.9659C16.5404 34.2684 18.7751 34.0175 19.5987 33.802C20.4371 33.5821 20.8769 33.1644 20.9979 32.8736C21.2592 32.2493 21.2976 31.7356 21.116 31.3032C20.8149 30.5844 19.9028 29.9512 18.1581 29.2471C16.2674 28.4826 13.9102 27.1837 13.4202 25.3121C13.2549 24.6745 13.2401 23.6826 14.1257 22.5756C15.0069 21.4805 16.1168 21.0332 17.2622 20.9698V19.4731C17.2622 19.0672 17.5928 18.7351 18.0002 18.7351C18.4076 18.7351 18.7382 19.0672 18.7382 19.4731V21.0819C20.2408 21.3801 21.6592 22.152 22.5492 22.8266C22.8739 23.0716 22.9389 23.5321 22.6924 23.8583Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.7621 34.897C32.509 35.5199 34.3968 37.2512 34.9724 39.3102C34.999 39.4047 35.0064 39.5036 34.9945 39.601C34.8676 40.6047 32.9592 42.9368 18 42.9368C3.04084 42.9368 1.13239 40.6047 1.00545 39.601C0.993642 39.5036 1.00102 39.4047 1.02759 39.3102C1.60323 37.2527 3.49102 35.5199 4.23787 34.897C3.96924 21.7474 10.9684 15.3623 13.113 13.7166C9.51306 7.96759 9.17653 3.43925 9.16325 3.24295C9.14406 2.96399 9.28723 2.69536 9.53077 2.55661C15.0716 -0.65219 21.5586 2.07544 21.8317 2.19352C22.1342 2.32193 22.3143 2.63632 22.273 2.96251C22.2538 3.1042 22.2302 3.24738 22.2007 3.39793C26.1475 3.01122 27.9364 4.56839 28.0161 4.64071C28.2316 4.83407 28.3142 5.13369 28.2286 5.40823C27.1659 8.82219 24.2375 12.3852 22.9918 13.7948C25.2456 15.5586 32.0278 21.9511 31.7621 34.897ZM2.55081 39.3944C3.09545 39.8578 5.85998 41.4608 18 41.4608C30.14 41.4608 32.9045 39.8578 33.4492 39.3929C32.7392 37.4726 30.5976 35.8505 30.574 35.8328C30.3806 35.6882 30.2714 35.4609 30.2788 35.2188C30.7245 20.6404 21.5867 14.5889 21.4937 14.5284C21.3077 14.4103 21.1837 14.214 21.1586 13.9955C21.1335 13.7771 21.2044 13.5572 21.3564 13.3992C21.3569 13.3987 21.3581 13.3974 21.3599 13.3955C21.4963 13.2505 25.2479 9.25931 26.6404 5.49531C25.9674 5.13517 24.3984 4.5551 21.7549 4.93886C21.0154 7.00967 19.7904 9.15134 19.7225 9.26941C19.5173 9.62513 19.0627 9.74321 18.7144 9.541C18.3601 9.33879 18.2376 8.88566 18.4413 8.53437C18.442 8.5332 18.4445 8.52873 18.4488 8.52111C18.5743 8.2989 20.213 5.39699 20.6996 3.34774C19.1557 2.82377 14.6303 1.59279 10.6894 3.60457C10.8769 4.8931 11.6651 8.75577 14.617 13.3254C15.1617 13.5498 16.9417 14.1977 18.6804 13.7948C19.0819 13.6915 19.4745 13.9468 19.5675 14.3424C19.662 14.7409 19.4155 15.138 19.0184 15.2309C18.5018 15.352 17.9867 15.4007 17.4923 15.4007C16.0635 15.4007 14.8237 14.9948 14.2038 14.7527C12.6525 15.9114 5.32124 22.1091 5.72124 35.2203C5.72862 35.4623 5.61792 35.6896 5.42752 35.8343C5.42706 35.8346 5.42572 35.8357 5.42352 35.8374C5.31809 35.9189 3.24478 37.5221 2.55081 39.3944ZM22.6924 23.8583C22.4503 24.1845 21.9883 24.2479 21.6592 24.0029C21.6179 23.9705 17.398 20.8428 15.2785 23.4981C14.8696 24.0088 14.7294 24.4811 14.849 24.9402C15.1028 25.9055 16.5449 27.0036 18.7102 27.8774C20.2393 28.4944 21.885 29.3165 22.4784 30.732C22.8149 31.5364 22.775 32.4471 22.3618 33.4419C22.0208 34.2611 21.1263 34.9297 19.9706 35.2293C19.6902 35.3031 19.2563 35.3695 18.7382 35.3931V36.8839C18.7382 37.2927 18.4076 37.6219 18.0002 37.6219C17.5928 37.6219 17.2622 37.2927 17.2622 36.8839V35.2987C15.9988 35.0817 14.4313 34.4913 12.6911 33.1275C12.3708 32.8736 12.3147 32.4102 12.5656 32.0899C12.8165 31.7666 13.2785 31.715 13.6018 31.9659C16.5404 34.2684 18.7751 34.0175 19.5987 33.802C20.4371 33.5821 20.8769 33.1644 20.9979 32.8736C21.2592 32.2493 21.2976 31.7356 21.116 31.3032C20.8149 30.5844 19.9028 29.9512 18.1581 29.2471C16.2674 28.4826 13.9102 27.1837 13.4202 25.3121C13.2549 24.6745 13.2401 23.6826 14.1257 22.5756C15.0069 21.4805 16.1168 21.0332 17.2622 20.9698V19.4731C17.2622 19.0672 17.5928 18.7351 18.0002 18.7351C18.4076 18.7351 18.7382 19.0672 18.7382 19.4731V21.0819C20.2408 21.3801 21.6592 22.152 22.5492 22.8266C22.8739 23.0716 22.9389 23.5321 22.6924 23.8583Z"
      fill={fill}
    />
    <path
      d="M34.9724 39.3102L34.4909 39.4449L34.4911 39.4456L34.9724 39.3102ZM31.7621 34.897L31.2622 34.8868L31.2573 35.1271L31.4419 35.281L31.7621 34.897ZM34.9945 39.601L35.4906 39.6637L35.4909 39.6612L34.9945 39.601ZM1.00545 39.601L0.509076 39.6612L0.509401 39.6637L1.00545 39.601ZM1.02759 39.3102L1.50892 39.4456L1.5091 39.445L1.02759 39.3102ZM4.23787 34.897L4.55811 35.281L4.74267 35.1271L4.73776 34.8868L4.23787 34.897ZM13.113 13.7166L13.4174 14.1132L13.778 13.8365L13.5368 13.4512L13.113 13.7166ZM9.16325 3.24295L9.66211 3.20919L9.66207 3.20864L9.16325 3.24295ZM9.53077 2.55661L9.77828 2.99107L9.78134 2.98929L9.53077 2.55661ZM21.8317 2.19352L21.6332 2.65246L21.6363 2.65379L21.8317 2.19352ZM22.273 2.96251L22.7685 3.02961L22.769 3.02536L22.273 2.96251ZM22.2007 3.39793L21.71 3.30172L21.5807 3.96106L22.2494 3.89554L22.2007 3.39793ZM28.0161 4.64071L27.6801 5.011L27.6821 5.01286L28.0161 4.64071ZM28.2286 5.40823L27.7513 5.25938L27.7512 5.25962L28.2286 5.40823ZM22.9918 13.7948L22.6171 13.4637L22.2656 13.8614L22.6837 14.1886L22.9918 13.7948ZM2.55081 39.3944L2.08198 39.2206L1.96043 39.5485L2.22678 39.7752L2.55081 39.3944ZM33.4492 39.3929L33.7738 39.7732L34.0391 39.5467L33.9182 39.2195L33.4492 39.3929ZM30.574 35.8328L30.8739 35.4328L30.8735 35.4324L30.574 35.8328ZM30.2788 35.2188L29.779 35.2035V35.2036L30.2788 35.2188ZM21.4937 14.5284L21.7664 14.1093L21.7617 14.1063L21.4937 14.5284ZM21.1586 13.9955L20.6619 14.0526L20.6619 14.0526L21.1586 13.9955ZM21.3564 13.3992L21.7167 13.746L21.7222 13.7401L21.3564 13.3992ZM21.3599 13.3955L21.7242 13.738L21.7242 13.738L21.3599 13.3955ZM26.6404 5.49531L27.1094 5.6688L27.2606 5.26007L26.8763 5.05445L26.6404 5.49531ZM21.7549 4.93886L21.6831 4.44405L21.3853 4.48728L21.284 4.77071L21.7549 4.93886ZM19.7225 9.26941L20.1556 9.51923L20.1559 9.51865L19.7225 9.26941ZM18.7144 9.541L18.9654 9.10857L18.9623 9.10676L18.7144 9.541ZM18.4413 8.53437L18.8739 8.78518L18.8774 8.77902L18.8808 8.77277L18.4413 8.53437ZM18.4488 8.52111L18.0134 8.27525L18.0134 8.27526L18.4488 8.52111ZM20.6996 3.34774L21.1861 3.46326L21.2912 3.02052L20.8603 2.87427L20.6996 3.34774ZM10.6894 3.60457L10.4621 3.15924L10.1431 3.32209L10.1946 3.67655L10.6894 3.60457ZM14.617 13.3254L14.197 13.5967L14.2819 13.7282L14.4266 13.7877L14.617 13.3254ZM18.6804 13.7948L18.7933 14.282L18.805 14.279L18.6804 13.7948ZM19.5675 14.3424L19.0808 14.4568L19.081 14.4577L19.5675 14.3424ZM19.0184 15.2309L18.9044 14.7441L18.9044 14.7441L19.0184 15.2309ZM14.2038 14.7527L14.3856 14.287L14.127 14.186L13.9045 14.3521L14.2038 14.7527ZM5.72124 35.2203L6.22101 35.205L6.221 35.205L5.72124 35.2203ZM5.42752 35.8343L5.12496 35.436L5.11537 35.4437L5.42752 35.8343ZM5.42352 35.8374L5.72937 36.2329L5.72948 36.2328L5.42352 35.8374ZM21.6592 24.0029L21.3502 24.3962L21.3606 24.404L21.6592 24.0029ZM22.6924 23.8583L22.2934 23.5568L22.2909 23.5603L22.6924 23.8583ZM15.2785 23.4981L15.6688 23.8106L15.6692 23.8101L15.2785 23.4981ZM14.849 24.9402L14.3651 25.0662L14.3654 25.0674L14.849 24.9402ZM18.7102 27.8774L18.523 28.3411L18.5231 28.3411L18.7102 27.8774ZM22.4784 30.732L22.9396 30.539L22.9395 30.5387L22.4784 30.732ZM22.3618 33.4419L22.8234 33.634L22.8235 33.6337L22.3618 33.4419ZM19.9706 35.2293L19.8452 34.7453L19.8434 34.7458L19.9706 35.2293ZM18.7382 35.3931L18.7154 34.8937L18.2382 34.9154V35.3931H18.7382ZM17.2622 35.2987H17.7622V34.8772L17.3468 34.8059L17.2622 35.2987ZM12.6911 33.1275L12.3805 33.5193L12.3826 33.521L12.6911 33.1275ZM12.5656 32.0899L12.9592 32.3982L12.9606 32.3965L12.5656 32.0899ZM13.6018 31.9659L13.9101 31.5723L13.9083 31.5709L13.6018 31.9659ZM19.5987 33.802L19.7253 34.2857L19.7256 34.2857L19.5987 33.802ZM20.9979 32.8736L20.5367 32.6806L20.5363 32.6815L20.9979 32.8736ZM21.116 31.3032L20.6548 31.4964L20.655 31.4967L21.116 31.3032ZM18.1581 29.2471L17.9707 29.7107L17.971 29.7108L18.1581 29.2471ZM13.4202 25.3121L12.9362 25.4376L12.9365 25.4388L13.4202 25.3121ZM14.1257 22.5756L13.7362 22.2622L13.7353 22.2633L14.1257 22.5756ZM17.2622 20.9698L17.2899 21.469L17.7622 21.4428V20.9698H17.2622ZM18.7382 21.0819H18.2382V21.4925L18.6409 21.5724L18.7382 21.0819ZM22.5492 22.8266L22.2472 23.225L22.248 23.2257L22.5492 22.8266ZM35.4539 39.1756C35.1397 38.0515 34.4762 37.0412 33.8163 36.2458C33.153 35.4464 32.4698 34.8362 32.0824 34.513L31.4419 35.281C31.8013 35.5808 32.4355 36.1477 33.0467 36.8843C33.6613 37.6251 34.2295 38.51 34.4909 39.4449L35.4539 39.1756ZM35.4909 39.6612C35.5106 39.499 35.4984 39.3336 35.4537 39.1749L34.4911 39.4456C34.4996 39.4758 34.5021 39.5082 34.4982 39.5409L35.4909 39.6612ZM18 43.4368C25.4946 43.4368 29.7696 42.8538 32.203 42.1242C34.6076 41.4032 35.3875 40.479 35.4906 39.6637L34.4985 39.5383C34.4747 39.7267 34.2369 40.4704 31.9158 41.1663C29.6234 41.8537 25.4645 42.4368 18 42.4368V43.4368ZM0.509401 39.6637C0.612505 40.479 1.39239 41.4032 3.79704 42.1242C6.23038 42.8538 10.5054 43.4368 18 43.4368V42.4368C10.5355 42.4368 6.37665 41.8537 4.08424 41.1663C1.76314 40.4704 1.52533 39.7267 1.5015 39.5383L0.509401 39.6637ZM0.546264 39.1749C0.501611 39.3336 0.489427 39.499 0.509083 39.6612L1.50182 39.5408C1.49786 39.5082 1.50043 39.4758 1.50891 39.4456L0.546264 39.1749ZM3.91763 34.513C3.5301 34.8362 2.84694 35.4468 2.18369 36.2464C1.52381 37.0419 0.860351 38.0522 0.546079 39.1755L1.5091 39.445C1.77046 38.5107 2.33872 37.6258 2.95336 36.8849C3.56462 36.1479 4.19878 35.5807 4.55811 35.281L3.91763 34.513ZM12.8086 13.3199C10.5852 15.0261 3.46504 21.5471 3.73797 34.9072L4.73776 34.8868C4.47343 21.9478 11.3515 15.6985 13.4174 14.1132L12.8086 13.3199ZM8.66439 3.2767C8.68149 3.52939 9.03361 8.14405 12.6892 13.9819L13.5368 13.4512C9.9925 7.79113 9.67157 3.34912 9.66211 3.20919L8.66439 3.2767ZM9.28327 2.12217C8.87218 2.35636 8.63212 2.80759 8.66442 3.27726L9.66207 3.20864C9.656 3.12039 9.70228 3.03435 9.77827 2.99106L9.28327 2.12217ZM22.0301 1.73459C21.8689 1.66489 20.1311 0.934959 17.7191 0.631398C15.309 0.328081 12.1793 0.445033 9.2802 2.12393L9.78134 2.98929C12.4231 1.45939 15.3073 1.33575 17.5942 1.62357C19.8792 1.91115 21.5213 2.60407 21.6332 2.65245L22.0301 1.73459ZM22.769 3.02536C22.8384 2.47793 22.5363 1.9494 22.027 1.73325L21.6363 2.65379C21.7322 2.69446 21.7903 2.7947 21.777 2.89966L22.769 3.02536ZM22.6913 3.49413C22.7227 3.33407 22.7479 3.18119 22.7685 3.02961L21.7775 2.89541C21.7597 3.02722 21.7377 3.16069 21.71 3.30172L22.6913 3.49413ZM28.3521 4.27043C28.1864 4.12013 26.2624 2.49757 22.1519 2.90031L22.2494 3.89554C26.0326 3.52487 27.6863 5.01665 27.6801 5.01099L28.3521 4.27043ZM28.7059 5.55707C28.8501 5.09481 28.7103 4.59189 28.35 4.26856L27.6821 5.01286C27.7528 5.07624 27.7783 5.17257 27.7513 5.25938L28.7059 5.55707ZM23.3665 14.1259C24.612 12.7166 27.6083 9.08314 28.706 5.55683L27.7512 5.25962C26.7235 8.56124 23.8631 12.0539 22.6171 13.4637L23.3665 14.1259ZM32.262 34.9073C32.5319 21.7545 25.6327 15.2266 23.2999 13.401L22.6837 14.1886C24.8586 15.8906 31.5237 22.1477 31.2622 34.8868L32.262 34.9073ZM18 40.9608C11.9486 40.9608 8.25838 40.561 6.02588 40.1112C3.78482 39.6597 3.05365 39.1657 2.87485 39.0136L2.22678 39.7752C2.59262 40.0865 3.51603 40.6257 5.82839 41.0915C8.14933 41.5591 11.9114 41.9608 18 41.9608V40.9608ZM33.1246 39.0126C32.946 39.165 32.2153 39.6593 29.9741 40.111C27.7416 40.561 24.0514 40.9608 18 40.9608V41.9608C24.0886 41.9608 27.8507 41.5591 30.1716 41.0913C32.4839 40.6253 33.4077 40.0857 33.7738 39.7732L33.1246 39.0126ZM30.274 36.2328C30.2726 36.2318 30.792 36.6243 31.395 37.2472C32.0047 37.877 32.661 38.703 32.9802 39.5663L33.9182 39.2195C33.5274 38.1626 32.7579 37.2173 32.1134 36.5516C31.4622 35.8789 30.8989 35.4515 30.8739 35.4328L30.274 36.2328ZM29.779 35.2036C29.7667 35.6078 29.95 35.9905 30.2744 36.2332L30.8735 35.4324C30.8112 35.3858 30.7761 35.3139 30.7785 35.234L29.779 35.2036ZM21.2209 14.9474C21.2207 14.9473 21.3625 15.0405 21.61 15.2321C21.8569 15.4234 22.208 15.7119 22.6275 16.1026C23.4665 16.8841 24.5772 18.0729 25.6729 19.7078C27.8612 22.9728 29.9984 28.0289 29.779 35.2035L30.7785 35.2341C31.2319 20.4063 21.9293 14.2153 21.7664 14.1093L21.2209 14.9474ZM20.6619 14.0526C20.7044 14.4226 20.9136 14.7523 21.2257 14.9505L21.7617 14.1063C21.7018 14.0682 21.663 14.0054 21.6553 13.9385L20.6619 14.0526ZM20.9962 13.0525C20.7366 13.3221 20.6204 13.6919 20.6619 14.0526L21.6554 13.9385C21.6466 13.8623 21.6721 13.7922 21.7166 13.746L20.9962 13.0525ZM20.9956 13.053C20.9944 13.0543 20.9921 13.0567 20.9906 13.0583L21.7222 13.7401C21.7217 13.7407 21.7214 13.7409 21.7221 13.7402C21.7226 13.7397 21.7233 13.739 21.7242 13.738L20.9956 13.053ZM26.1715 5.32182C25.501 7.13412 24.2504 9.02618 23.1309 10.5001C22.0167 11.967 21.0577 12.9869 20.9956 13.053L21.7242 13.738C21.7984 13.659 22.7835 12.6108 23.9273 11.1049C25.0658 9.60602 26.3873 7.6205 27.1094 5.6688L26.1715 5.32182ZM21.8268 5.43367C24.364 5.06533 25.8252 5.62618 26.4046 5.93616L26.8763 5.05445C26.1096 4.64415 24.4328 4.04487 21.6831 4.44405L21.8268 5.43367ZM20.1559 9.51865C20.2253 9.39808 21.4701 7.22323 22.2258 5.10701L21.284 4.77071C20.5608 6.79612 19.3555 8.90459 19.289 9.02018L20.1559 9.51865ZM18.4634 9.97342C19.0506 10.3143 19.812 10.115 20.1556 9.51923L19.2894 9.0196C19.2227 9.13524 19.0748 9.1721 18.9654 9.10858L18.4634 9.97342ZM18.0088 8.28357C17.6653 8.87595 17.8724 9.63608 18.4665 9.97523L18.9623 9.10676C18.8479 9.04149 18.81 8.89536 18.8739 8.78518L18.0088 8.28357ZM18.0134 8.27526C18.0112 8.2792 18.0051 8.28985 18.0018 8.29597L18.8808 8.77277C18.8798 8.77465 18.879 8.77602 18.8789 8.77629C18.8788 8.77655 18.8787 8.77673 18.8786 8.77683C18.8786 8.77689 18.8785 8.77693 18.8785 8.77695C18.8785 8.77698 18.8785 8.77699 18.8785 8.77699C18.8785 8.77699 18.8785 8.77696 18.8786 8.77689C18.8786 8.77681 18.8787 8.77671 18.8787 8.77658C18.8789 8.77632 18.8791 8.77597 18.8793 8.77552C18.8804 8.7736 18.882 8.77087 18.8842 8.76696L18.0134 8.27526ZM20.2131 3.23222C19.9829 4.20171 19.4716 5.39922 18.9883 6.40259C18.509 7.39773 18.074 8.16797 18.0134 8.27525L18.8842 8.76696C18.9491 8.65204 19.3962 7.86022 19.8892 6.83654C20.3783 5.82108 20.9297 4.54302 21.1861 3.46326L20.2131 3.23222ZM10.9168 4.0499C14.6627 2.13765 19.012 3.30299 20.5389 3.82122L20.8603 2.87427C19.2994 2.34454 14.5979 1.04794 10.4621 3.15924L10.9168 4.0499ZM15.037 13.0541C12.1327 8.55819 11.3639 4.76782 11.1842 3.53258L10.1946 3.67655C10.3898 5.01839 11.1974 8.95335 14.197 13.5967L15.037 13.0541ZM18.5675 13.3077C16.9909 13.6731 15.3371 13.0813 14.8075 12.8631L14.4266 13.7877C14.9863 14.0183 16.8926 14.7224 18.7933 14.2819L18.5675 13.3077ZM20.0542 14.228C19.9007 13.5749 19.2437 13.1336 18.5558 13.3106L18.805 14.279C18.9201 14.2494 19.0483 14.3188 19.0808 14.4568L20.0542 14.228ZM19.1325 15.7178C19.7987 15.5617 20.2123 14.8949 20.054 14.2271L19.081 14.4577C19.1116 14.5869 19.0322 14.7142 18.9044 14.7441L19.1325 15.7178ZM17.4923 15.9007C18.0192 15.9007 18.5732 15.8488 19.1325 15.7178L18.9044 14.7441C18.4305 14.8551 17.9542 14.9007 17.4923 14.9007V15.9007ZM14.0219 15.2185C14.6699 15.4715 15.9757 15.9007 17.4923 15.9007V14.9007C16.1513 14.9007 14.9775 14.5181 14.3856 14.287L14.0219 15.2185ZM6.221 35.205C5.82779 22.316 13.0264 16.2561 14.503 15.1533L13.9045 14.3521C12.2785 15.5666 4.8147 21.9021 5.22147 35.2355L6.221 35.205ZM5.72998 36.2324C6.04745 35.9912 6.23338 35.6108 6.22101 35.205L5.22147 35.2355C5.22386 35.3139 5.18839 35.388 5.12506 35.4361L5.72998 36.2324ZM5.72948 36.2328C5.73033 36.2322 5.73158 36.2312 5.73248 36.2305C5.73296 36.2301 5.73371 36.2296 5.73455 36.2289C5.73499 36.2286 5.73711 36.2269 5.73966 36.2249L5.11537 35.4437C5.11675 35.4426 5.11782 35.4417 5.1183 35.4414C5.11885 35.4409 5.11927 35.4406 5.11947 35.4404C5.11986 35.4401 5.12005 35.44 5.11986 35.4401C5.11943 35.4405 5.1189 35.4409 5.11755 35.4419L5.72948 36.2328ZM3.01964 39.5681C3.33133 38.7272 3.96783 37.9174 4.56883 37.2903C5.16282 36.6706 5.68589 36.2666 5.72937 36.2329L5.11766 35.4418C5.05572 35.4897 4.48941 35.928 3.8469 36.5984C3.2114 37.2614 2.46426 38.1892 2.08198 39.2206L3.01964 39.5681ZM21.3606 24.404C21.9055 24.8096 22.6827 24.7104 23.0939 24.1562L22.2909 23.5603C22.218 23.6585 22.0712 23.6863 21.9577 23.6018L21.3606 24.404ZM15.6692 23.8101C16.5219 22.7419 17.8152 22.7801 19.0861 23.2156C20.3381 23.6446 21.3533 24.3985 21.3503 24.3961L21.9681 23.6098C21.9237 23.5749 20.8084 22.7487 19.4102 22.2696C18.0309 21.797 16.1546 21.5991 14.8877 23.1862L15.6692 23.8101ZM15.3328 24.8142C15.2667 24.5604 15.3188 24.2477 15.6688 23.8106L14.8882 23.1857C14.4204 23.7699 14.1921 24.4019 14.3651 25.0662L15.3328 24.8142ZM18.8973 27.4137C17.8429 26.9882 16.9833 26.5153 16.3656 26.0452C15.7324 25.5634 15.4167 25.1331 15.3325 24.813L14.3654 25.0674C14.5351 25.7126 15.0674 26.314 15.76 26.841C16.4681 27.3798 17.4122 27.8928 18.523 28.3411L18.8973 27.4137ZM22.9395 30.5387C22.5918 29.7092 21.9479 29.0818 21.2261 28.5916C20.5043 28.1014 19.6707 27.7258 18.8972 27.4137L18.5231 28.3411C19.2787 28.646 20.0326 28.9899 20.6643 29.4189C21.2959 29.8478 21.7716 30.3393 22.0172 30.9253L22.9395 30.5387ZM22.8235 33.6337C23.275 32.5469 23.3393 31.4945 22.9396 30.539L22.0171 30.9249C22.2904 31.5783 22.2751 32.3472 21.9 33.2501L22.8235 33.6337ZM20.0961 35.7133C21.3469 35.389 22.4029 34.6443 22.8234 33.634L21.9001 33.2498C21.6387 33.8779 20.9058 34.4703 19.8452 34.7453L20.0961 35.7133ZM18.761 35.8926C19.3042 35.8679 19.7747 35.7979 20.0979 35.7128L19.8434 34.7458C19.6057 34.8083 19.2083 34.8712 18.7154 34.8937L18.761 35.8926ZM19.2382 36.8839V35.3931H18.2382V36.8839H19.2382ZM18.0002 38.1219C18.6831 38.1219 19.2382 37.5695 19.2382 36.8839H18.2382C18.2382 37.0159 18.1321 37.1219 18.0002 37.1219V38.1219ZM16.7622 36.8839C16.7622 37.5695 17.3173 38.1219 18.0002 38.1219V37.1219C17.8683 37.1219 17.7622 37.0159 17.7622 36.8839H16.7622ZM16.7622 35.2987V36.8839H17.7622V35.2987H16.7622ZM12.3826 33.521C14.1851 34.9337 15.8289 35.5599 17.1776 35.7915L17.3468 34.8059C16.1686 34.6036 14.6774 34.0489 12.9995 32.734L12.3826 33.521ZM12.172 31.7815C11.7501 32.3201 11.8464 33.096 12.3805 33.5193L13.0016 32.7357C12.8952 32.6513 12.8793 32.5003 12.9592 32.3982L12.172 31.7815ZM13.9083 31.5709C13.3734 31.1557 12.5958 31.2355 12.1706 31.7833L12.9606 32.3965C13.0372 32.2977 13.1836 32.2743 13.2952 32.3609L13.9083 31.5709ZM19.4721 33.3183C18.7893 33.497 16.7177 33.7721 13.9101 31.5723L13.2934 32.3595C16.3632 34.7647 18.7609 34.5381 19.7253 34.2857L19.4721 33.3183ZM20.5363 32.6815C20.4974 32.7751 20.2253 33.1207 19.4718 33.3184L19.7256 34.2857C20.6489 34.0435 21.2564 33.5537 21.4595 33.0658L20.5363 32.6815ZM20.655 31.4967C20.7654 31.7598 20.7691 32.1251 20.5367 32.6806L21.4592 33.0666C21.7492 32.3735 21.8297 31.7115 21.577 31.1096L20.655 31.4967ZM17.971 29.7108C18.8279 30.0566 19.4532 30.3746 19.8931 30.6802C20.3333 30.9861 20.5545 31.2567 20.6548 31.4964L21.5772 31.11C21.3765 30.6308 20.991 30.2254 20.4637 29.859C19.936 29.4923 19.233 29.1417 18.3452 28.7834L17.971 29.7108ZM12.9365 25.4388C13.2234 26.5346 14.0403 27.4134 14.9671 28.0971C15.9013 28.7862 17.006 29.3206 17.9707 29.7107L18.3456 28.7836C17.4195 28.4091 16.4003 27.9117 15.5607 27.2924C14.7138 26.6676 14.107 25.9612 13.9039 25.1855L12.9365 25.4388ZM13.7353 22.2633C12.7389 23.5088 12.7366 24.6677 12.9362 25.4376L13.9042 25.1866C13.7732 24.6813 13.7414 23.8565 14.5162 22.888L13.7353 22.2633ZM17.2345 20.4705C15.9656 20.5408 14.7168 21.0433 13.7362 22.2622L14.5153 22.8891C15.2969 21.9176 16.2681 21.5256 17.2899 21.469L17.2345 20.4705ZM16.7622 19.4731V20.9698H17.7622V19.4731H16.7622ZM18.0002 18.2351C17.316 18.2351 16.7622 18.7917 16.7622 19.4731H17.7622C17.7622 19.3427 17.8696 19.2351 18.0002 19.2351V18.2351ZM19.2382 19.4731C19.2382 18.7917 18.6844 18.2351 18.0002 18.2351V19.2351C18.1308 19.2351 18.2382 19.3427 18.2382 19.4731H19.2382ZM19.2382 21.0819V19.4731H18.2382V21.0819H19.2382ZM22.8512 22.4281C21.916 21.7193 20.429 20.9077 18.8355 20.5915L18.6409 21.5724C20.0525 21.8525 21.4024 22.5848 22.2472 23.225L22.8512 22.4281ZM23.0913 24.1597C23.5043 23.6132 23.3957 22.8389 22.8504 22.4274L22.248 23.2257C22.3522 23.3043 22.3734 23.451 22.2935 23.5568L23.0913 24.1597Z"
      fill={fill}
      mask="url(#path-1-outside-1)"
    />
  </svg>
);
