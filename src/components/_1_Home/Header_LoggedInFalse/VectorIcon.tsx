import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M47.2518 13.7504H43.9183C43.4806 13.7504 43.0471 13.8366 42.6426 14.0041C42.2383 14.1716 41.8708 14.4171 41.5611 14.7266C41.2516 15.0364 41.0061 15.4039 40.8386 15.8081C40.6711 16.2126 40.5848 16.6461 40.5848 17.0839V30.4186C40.5848 34.8391 38.8288 39.0785 35.7031 42.2043C32.5773 45.33 28.3381 47.086 23.9176 47.0861C21.7288 47.0861 19.5614 46.655 17.5393 45.8174C15.5171 44.9798 13.6797 43.752 12.132 42.2043C10.5843 40.6566 9.35659 38.8192 8.51899 36.797C7.68139 34.7748 7.25031 32.6074 7.25034 30.4186L7.25034 17.0849C7.25046 16.6471 7.16433 16.2134 6.99688 15.8089C6.82941 15.4044 6.58389 15.0366 6.27434 14.7271C5.96476 14.4174 5.59723 14.1719 5.19273 14.0041C4.78823 13.8366 4.35469 13.7504 3.91684 13.7504H0.583336L0.583336 30.4179C0.583336 33.4822 1.1869 36.5164 2.35955 39.3475C3.53221 42.1785 5.25101 44.7508 7.41779 46.9176C9.58459 49.0844 12.1569 50.8031 14.988 51.9757C17.819 53.1484 20.8533 53.7519 23.9176 53.7519C30.1061 53.7519 36.0413 51.2935 40.4173 46.9175C44.7933 42.5416 47.2518 36.6065 47.2518 30.4179V13.7504Z'
      fill='url(#paint0_linear_1054_23575)'
    />
    <path
      d='M23.9176 40.4191C26.5698 40.4191 29.1133 39.3656 30.9886 37.4902C32.8641 35.6148 33.9176 33.0713 33.9176 30.4191V13.7504C33.9176 11.9821 34.6201 10.2866 35.8703 9.03638C37.1206 7.78613 38.8163 7.08362 40.5846 7.08362L47.2516 7.08362V0.416622L40.5848 0.416622C37.0486 0.416623 33.6571 1.82137 31.1563 4.32187C28.6558 6.82262 27.2511 10.2141 27.2511 13.7504L27.2511 30.4186C27.2511 31.3027 26.8998 32.1506 26.2748 32.7758C25.6496 33.4009 24.8017 33.7521 23.9176 33.7521C23.0335 33.7521 22.1856 33.4009 21.5604 32.7758C20.9353 32.1506 20.5841 31.3027 20.5841 30.4186L20.5841 13.7504C20.5841 10.2141 19.1793 6.82262 16.6787 4.32187C14.1782 1.82137 10.7867 0.416624 7.25033 0.416624L0.583335 0.416624L0.583335 7.08462H7.25033C9.01828 7.08462 10.7139 7.78688 11.9641 9.03688C13.2143 10.2869 13.9168 11.9824 13.9171 13.7504V30.4186C13.917 31.7319 14.1756 33.0324 14.6782 34.2457C15.1807 35.4591 15.9174 36.5616 16.846 37.4902C17.7747 38.4188 18.8771 39.1555 20.0905 39.658C21.3038 40.1606 22.6043 40.4192 23.9176 40.4191Z'
      fill='url(#paint1_linear_1054_23575)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1054_23575'
        x1={23.959}
        y1={-10.7519}
        x2={-12.3386}
        y2={49.8267}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FDAE8F' />
        <stop offset={1} stopColor='#FD1C68' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_1054_23575'
        x1={23.959}
        y1={-10.7519}
        x2={-12.3386}
        y2={49.8267}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FDAE8F' />
        <stop offset={1} stopColor='#FD1C68' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
