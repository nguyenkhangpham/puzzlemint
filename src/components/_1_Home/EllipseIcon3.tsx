import { memo, SVGProps } from 'react';

const EllipseIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={11} cy={11} r={11} stroke='url(#paint0_linear_1054_23199)' strokeWidth={4} />
    <defs>
      <linearGradient
        id='paint0_linear_1054_23199'
        x1={11.0195}
        y1={-4.60684}
        x2={-2.94587}
        y2={22.0302}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FDAE8F' />
        <stop offset={1} stopColor='#FD1C68' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(EllipseIcon3);
export { Memo as EllipseIcon3 };
