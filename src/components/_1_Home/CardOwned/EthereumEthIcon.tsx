import { memo, SVGProps } from 'react';

const EthereumEthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={12} cy={12} r={12} stroke='white' />
    <path d='M11.9673 4.8L11.8718 5.12426V14.5326L11.9673 14.6278L16.3344 12.0464L11.9673 4.8Z' fill='white' />
    <path d='M11.9673 4.8L7.6 12.0464L11.9673 14.6278V10.0613V4.8Z' fill='white' />
    <path d='M11.9673 15.4547L11.9135 15.5203V18.8717L11.9673 19.0287L16.3371 12.8746L11.9673 15.4547Z' fill='white' />
    <path d='M11.9673 19.0287V15.4547L7.6 12.8746L11.9673 19.0287Z' fill='white' />
    <path d='M11.9673 14.6278L16.3344 12.0464L11.9673 10.0613V14.6278Z' fill='white' />
    <path d='M7.6 12.0464L11.9673 14.6278V10.0613L7.6 12.0464Z' fill='white' />
  </svg>
);

const Memo = memo(EthereumEthIcon);
export { Memo as EthereumEthIcon };
