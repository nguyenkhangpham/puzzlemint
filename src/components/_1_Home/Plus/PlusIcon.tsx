import { memo, SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5 16H27' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 5V27' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(PlusIcon);
export { Memo as PlusIcon };
