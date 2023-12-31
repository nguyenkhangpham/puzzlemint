import { memo, SVGProps } from 'react';

const ArrowscounterclockwiseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.97913 12.4645H3.97913V6.4645'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M23.7782 8.22182C22.7567 7.20038 21.5441 6.39013 20.2095 5.83732C18.8749 5.28452 17.4445 5 16 5C14.5555 5 13.1251 5.28452 11.7905 5.83732C10.4559 6.39013 9.24327 7.20038 8.22182 8.22182L3.97919 12.4645'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.0209 19.5355H28.0209V25.5355'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.22182 23.7782C9.24327 24.7996 10.4559 25.6099 11.7905 26.1627C13.1251 26.7155 14.5555 27 16 27C17.4445 27 18.8749 26.7155 20.2095 26.1627C21.5441 25.6099 22.7567 24.7996 23.7782 23.7782L28.0208 19.5355'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ArrowscounterclockwiseIcon);
export { Memo as ArrowscounterclockwiseIcon };
