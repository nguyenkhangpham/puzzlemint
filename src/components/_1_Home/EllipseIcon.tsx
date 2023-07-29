import { memo, SVGProps } from 'react';

const EllipseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={21} cy={21} r={21} fill='url(#paint0_linear_1054_23197)' />
    <defs>
      <linearGradient
        id='paint0_linear_1054_23197'
        x1={21.0373}
        y1={-8.79487}
        x2={-5.62394}
        y2={42.0576}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FDAE8F' />
        <stop offset={1} stopColor='#FD1C68' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(EllipseIcon);
export { Memo as EllipseIcon };
