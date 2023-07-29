import { memo, SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M3.125 10H16.875' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10 3.125V16.875' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(PlusIcon);
export { Memo as PlusIcon };
