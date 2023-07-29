import { memo, SVGProps } from 'react';

const EllipseIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={12} cy={12} r={12} fill='url(#paint0_linear_1054_23200)' />
    <defs>
      <linearGradient
        id='paint0_linear_1054_23200'
        x1={12.0213}
        y1={-5.02564}
        x2={-3.21368}
        y2={24.0329}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FDAE8F' />
        <stop offset={1} stopColor='#FD1C68' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(EllipseIcon4);
export { Memo as EllipseIcon4 };
