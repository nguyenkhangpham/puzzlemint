import { memo, SVGProps } from 'react';

const ClockcounterclockwiseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M16 10V16' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M21.1962 19L16 16' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M8.97913 12.4645H3.97913V7.4645'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.22182 23.7782C9.7602 25.3166 11.7202 26.3642 13.854 26.7886C15.9878 27.2131 18.1995 26.9952 20.2095 26.1627C22.2195 25.3301 23.9375 23.9202 25.1462 22.1113C26.3549 20.3023 27 18.1756 27 16C27 13.8244 26.3549 11.6977 25.1462 9.88873C23.9375 8.07979 22.2195 6.66989 20.2095 5.83733C18.1995 5.00476 15.9878 4.78692 13.854 5.21136C11.7202 5.6358 9.7602 6.68345 8.22182 8.22182L3.97919 12.4645'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ClockcounterclockwiseIcon);
export { Memo as ClockcounterclockwiseIcon };
