import { memo, SVGProps } from 'react';

const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 27C16 27 3.5 20 3.5 11.5C3.50025 9.99767 4.02082 8.54179 4.97318 7.37989C5.92555 6.218 7.25093 5.4218 8.72399 5.12668C10.197 4.83155 11.7269 5.05571 13.0533 5.76104C14.3798 6.46637 15.421 7.60934 16 8.99562L16 8.99564C16.579 7.60935 17.6202 6.46638 18.9467 5.76105C20.2731 5.05571 21.8029 4.83155 23.276 5.12668C24.7491 5.4218 26.0745 6.218 27.0268 7.37989C27.9792 8.54179 28.4997 9.99767 28.5 11.5C28.5 20 16 27 16 27Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(HeartIcon);
export { Memo as HeartIcon };
