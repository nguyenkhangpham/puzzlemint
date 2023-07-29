import { memo, SVGProps } from 'react';

const CaretdownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M19.5 9L12 16.5L4.5 9' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(CaretdownIcon);
export { Memo as CaretdownIcon };
