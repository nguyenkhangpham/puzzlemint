import { memo, SVGProps } from 'react';

const Ellipse15Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={21} cy={21} r={21} fill='#D200FF' />
  </svg>
);

const Memo = memo(Ellipse15Icon);
export { Memo as Ellipse15Icon };
