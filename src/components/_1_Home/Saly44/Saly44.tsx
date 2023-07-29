import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Saly44.module.css';

interface Props {
  className?: string;
  classes?: {
    saly44?: string;
    root?: string;
  };
}
/* @figmaId 743:12531 */
export const Saly44: FC<Props> = memo(function Saly44(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.saly44 || ''} ${classes.saly44}`}></div>
    </div>
  );
});
