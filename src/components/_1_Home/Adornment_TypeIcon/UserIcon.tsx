import { memo, SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z'
      stroke='white'
      strokeWidth={2}
      strokeMiterlimit={10}
    />
    <path
      d='M2.42102 16.8743C3.18942 15.5442 4.29431 14.4398 5.62467 13.672C6.95504 12.9042 8.46404 12.5 10.0001 12.5C11.5361 12.5 13.0451 12.9043 14.3755 13.6721C15.7058 14.44 16.8107 15.5444 17.5791 16.8744'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(UserIcon);
export { Memo as UserIcon };
