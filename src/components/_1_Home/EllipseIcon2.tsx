import { memo, SVGProps } from 'react';

const EllipseIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={16} cy={16} r={16} stroke='url(#paint0_linear_1054_23198)' strokeWidth={4} />
    <defs>
      <linearGradient
        id='paint0_linear_1054_23198'
        x1={16.0284}
        y1={-6.70085}
        x2={-4.28491}
        y2={32.0439}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FDAE8F' />
        <stop offset={1} stopColor='#FD1C68' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(EllipseIcon2);
export { Memo as EllipseIcon2 };
