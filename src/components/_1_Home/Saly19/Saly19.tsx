import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Saly19.module.css';

interface Props {
  className?: string;
  classes?: {
    _11?: string;
    root?: string;
  };
}
/* @figmaId 743:12421 */
export const Saly19: FC<Props> = memo(function Saly19(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?._11 || ''} ${classes._11}`}></div>
    </div>
  );
});
