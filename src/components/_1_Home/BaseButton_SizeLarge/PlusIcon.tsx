import { memo, SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M3.75 12H20.25' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 3.75V20.25' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(PlusIcon);
export { Memo as PlusIcon };
