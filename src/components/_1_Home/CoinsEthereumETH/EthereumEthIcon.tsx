import { memo, SVGProps } from 'react';

const EthereumEthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={20} cy={20} r={20} fill='white' />
    <path d='M19.9454 8L19.7863 8.54043V24.221L19.9454 24.3797L27.224 20.0773L19.9454 8Z' fill='#343434' />
    <path d='M19.9455 8L12.6667 20.0773L19.9455 24.3797V16.7688V8Z' fill='#8C8C8C' />
    <path
      d='M19.9455 25.7578L19.8558 25.8672V31.4528L19.9455 31.7146L27.2285 21.4576L19.9455 25.7578Z'
      fill='#3C3C3B'
    />
    <path d='M19.9455 31.7146V25.7578L12.6667 21.4576L19.9455 31.7146Z' fill='#8C8C8C' />
    <path d='M19.9454 24.3797L27.224 20.0773L19.9454 16.7688V24.3797Z' fill='#141414' />
    <path d='M12.6667 20.0773L19.9455 24.3797V16.7688L12.6667 20.0773Z' fill='#393939' />
  </svg>
);

const Memo = memo(EthereumEthIcon);
export { Memo as EthereumEthIcon };
