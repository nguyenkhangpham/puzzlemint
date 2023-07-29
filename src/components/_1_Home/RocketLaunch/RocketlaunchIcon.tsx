import { memo, SVGProps } from 'react';

const RocketlaunchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.7574 23.0711C10.3431 27.3137 4.68629 27.3137 4.68629 27.3137C4.68629 27.3137 4.68629 21.6569 8.92893 20.2426'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M24.4853 13.1716L16 21.6569L10.3431 16L18.8284 7.51472C22.0414 4.3017 25.2545 4.33304 26.6247 4.53749C26.8357 4.56894 27.031 4.66733 27.1818 4.81816C27.3327 4.96899 27.4311 5.16429 27.4625 5.37527C27.667 6.74554 27.6983 9.95855 24.4853 13.1716Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M23.0711 14.5858V22.6569C23.0711 22.7882 23.0452 22.9182 22.9949 23.0395C22.9447 23.1609 22.871 23.2711 22.7782 23.364L18.7355 27.4067C18.6075 27.5347 18.4471 27.6255 18.2716 27.6695C18.096 27.7136 17.9118 27.7091 17.7386 27.6567C17.5653 27.6042 17.4096 27.5057 17.2879 27.3717C17.1663 27.2377 17.0833 27.0732 17.0478 26.8957L16 21.6569'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.4142 8.92893H9.34315C9.21182 8.92893 9.08179 8.9548 8.96046 9.00505C8.83914 9.05531 8.7289 9.12897 8.63604 9.22182L4.59332 13.2645C4.46533 13.3925 4.37448 13.5529 4.33046 13.7284C4.28643 13.904 4.29088 14.0882 4.34333 14.2614C4.39578 14.4347 4.49427 14.5904 4.62829 14.7121C4.7623 14.8337 4.92683 14.9167 5.10431 14.9522L10.3431 16'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(RocketlaunchIcon);
export { Memo as RocketlaunchIcon };
