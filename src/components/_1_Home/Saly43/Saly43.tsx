import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Saly43.module.css';

interface Props {
  className?: string;
  classes?: {
    saly43?: string;
    root?: string;
  };
}
/* @figmaId 743:12527 */
export const Saly43: FC<Props> = memo(function Saly43(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.saly43 || ''} ${classes.saly43}`}></div>
    </div>
  );
});
