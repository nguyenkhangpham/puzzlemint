import { memo, SVGProps } from 'react';

const ClockcounterclockwiseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10 6.25V10' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.2476 11.875L10 10' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5.61195 7.79031H2.48695V4.66531'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.13864 14.8614C6.10013 15.8228 7.32513 16.4776 8.65875 16.7429C9.99237 17.0082 11.3747 16.872 12.6309 16.3517C13.8872 15.8313 14.9609 14.9501 15.7164 13.8195C16.4718 12.689 16.875 11.3597 16.875 10C16.875 8.64025 16.4718 7.31104 15.7164 6.18045C14.9609 5.04987 13.8872 4.16868 12.6309 3.64833C11.3747 3.12798 9.99237 2.99183 8.65875 3.2571C7.32513 3.52237 6.10013 4.17715 5.13864 5.13864L2.48699 7.79029'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ClockcounterclockwiseIcon);
export { Memo as ClockcounterclockwiseIcon };
