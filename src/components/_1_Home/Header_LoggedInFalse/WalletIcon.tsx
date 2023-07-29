import { memo, SVGProps } from 'react';

const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.125 5V15C3.125 15.3315 3.2567 15.6495 3.49112 15.8839C3.72554 16.1183 4.04348 16.25 4.375 16.25H16.875C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V6.875C17.5 6.70924 17.4342 6.55027 17.3169 6.43306C17.1997 6.31585 17.0408 6.25 16.875 6.25H4.375C4.04348 6.25 3.72554 6.1183 3.49112 5.88388C3.2567 5.64946 3.125 5.33152 3.125 5ZM3.125 5C3.125 4.66848 3.2567 4.35054 3.49112 4.11612C3.72554 3.8817 4.04348 3.75 4.375 3.75H14.375'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.0625 12.1875C14.5803 12.1875 15 11.7678 15 11.25C15 10.7322 14.5803 10.3125 14.0625 10.3125C13.5447 10.3125 13.125 10.7322 13.125 11.25C13.125 11.7678 13.5447 12.1875 14.0625 12.1875Z'
      fill='white'
      stroke='white'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(WalletIcon);
export { Memo as WalletIcon };
