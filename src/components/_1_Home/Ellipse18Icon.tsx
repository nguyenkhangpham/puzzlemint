import { memo, SVGProps } from 'react';

const Ellipse18Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.93921 4.15018C5.58783 3.60517 6.31929 3.17163 7.09182 2.87433C7.86435 2.57703 8.66282 2.42178 9.44165 2.41744C10.2205 2.41311 10.9644 2.55977 11.6309 2.84907C12.2975 3.13836 12.8736 3.56462 13.3264 4.10349C13.7792 4.64237 14.0998 5.28332 14.2699 5.98975C14.44 6.69617 14.4563 7.45424 14.3178 8.22066C14.1793 8.98709 13.8888 9.74686 13.4628 10.4566C13.0368 11.1663 12.4838 11.8122 11.8351 12.3572L8.38717 8.25367L4.93921 4.15018Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Ellipse18Icon);
export { Memo as Ellipse18Icon };
