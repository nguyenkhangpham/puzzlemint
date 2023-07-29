import { memo, SVGProps } from 'react';

const CaretdownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M26 12L16 22L6 12' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(CaretdownIcon);
export { Memo as CaretdownIcon };
