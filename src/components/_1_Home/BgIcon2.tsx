import { memo, SVGProps } from 'react';

const BgIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 886 886' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.4}>
      <path
        d='M443 886C687.662 886 886 687.662 886 443C886 198.338 687.662 0 443 0C198.338 0 0 198.338 0 443C0 687.662 198.338 886 443 886Z'
        fill='url(#paint0_linear_1054_23139)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_1054_23139'
        x1={60.0969}
        y1={522.195}
        x2={740.17}
        y2={352.131}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFC83A' />
        <stop offset={0.504191} stopColor='#FF008A' />
        <stop offset={1} stopColor='#6100FF' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(BgIcon2);
export { Memo as BgIcon2 };
