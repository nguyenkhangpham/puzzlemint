import { memo, SVGProps } from 'react';

const RocketlaunchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.81802 17.3033C7.75736 20.4853 3.51472 20.4853 3.51472 20.4853C3.51472 20.4853 3.51472 16.2426 6.6967 15.182'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.364 9.87868L12 16.2426L7.75736 12L14.1213 5.63604C16.5311 3.22627 18.9408 3.24978 19.9685 3.40311C20.1268 3.4267 20.2733 3.5005 20.3864 3.61362C20.4995 3.72675 20.5733 3.87322 20.5969 4.03145C20.7502 5.05915 20.7737 7.46892 18.364 9.87868Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.3033 10.9393V16.9926C17.3033 17.0911 17.2839 17.1887 17.2462 17.2797C17.2085 17.3706 17.1533 17.4533 17.0836 17.523L14.0516 20.555C13.9556 20.651 13.8354 20.7191 13.7037 20.7522C13.572 20.7852 13.4338 20.7818 13.3039 20.7425C13.174 20.7032 13.0572 20.6293 12.9659 20.5288C12.8747 20.4283 12.8124 20.3049 12.7858 20.1718L12 16.2426'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.0607 6.6967H7.00736C6.90887 6.6967 6.81134 6.7161 6.72035 6.75379C6.62935 6.79148 6.54667 6.84672 6.47703 6.91637L3.44499 9.94841C3.349 10.0444 3.28086 10.1646 3.24784 10.2963C3.21482 10.428 3.21816 10.5662 3.2575 10.6961C3.29684 10.826 3.3707 10.9428 3.47121 11.0341C3.57173 11.1253 3.69512 11.1876 3.82823 11.2142L7.75736 12'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(RocketlaunchIcon);
export { Memo as RocketlaunchIcon };
