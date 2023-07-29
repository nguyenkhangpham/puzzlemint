import { memo, SVGProps } from 'react';

const BgIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1289 1022' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.4}>
      <g filter='url(#filter0_f_1054_23143)'>
        <path
          d='M552.815 97.1843C688.658 62.5253 761.675 -20.2584 899.655 4.57241C1219.09 62.057 1177.76 668.158 899.655 835.445C732.322 936.1 578.611 913.455 399.59 835.445C224.932 759.337 157.254 692.819 60.6519 528.641C25.5288 468.948 -15.5933 356.931 6.21107 276.702C31.0792 185.2 102.028 142.718 194.998 123.958C290.708 104.646 384.224 140.198 552.815 97.1843Z'
          fill='#EA72FF'
        />
      </g>
      <g filter='url(#filter1_f_1054_23143)'>
        <path
          d='M634.604 212.67C750.983 182.97 813.537 112.028 931.746 133.307C1205.41 182.568 1170 701.965 931.746 845.321C788.39 931.577 656.704 912.17 503.334 845.321C353.703 780.1 295.722 723.098 212.962 582.406C182.872 531.252 147.642 435.259 166.322 366.507C187.627 288.095 248.409 251.69 328.058 235.614C410.054 219.065 490.17 249.531 634.604 212.67Z'
          fill='#FF007E'
        />
      </g>
      <g filter='url(#filter2_f_1054_23143)'>
        <ellipse
          cx={793.553}
          cy={601.271}
          rx={418.632}
          ry={285.106}
          transform='rotate(21.9106 793.553 601.271)'
          fill='#FFAA6C'
        />
      </g>
    </g>
    <defs>
      <filter
        id='filter0_f_1054_23143'
        x={-599.877}
        y={-600}
        width={2323.88}
        height={2102.71}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={300} result='effect1_foregroundBlur_1054_23143' />
      </filter>
      <filter
        id='filter1_f_1054_23143'
        x={-238.894}
        y={-270.611}
        width={1762.84}
        height={1573.58}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={200} result='effect1_foregroundBlur_1054_23143' />
      </filter>
      <filter
        id='filter2_f_1054_23143'
        x={-9.24957}
        y={-105.975}
        width={1605.61}
        height={1414.49}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={200} result='effect1_foregroundBlur_1054_23143' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(BgIcon4);
export { Memo as BgIcon4 };
