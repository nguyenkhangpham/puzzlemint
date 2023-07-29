import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Saly1.module.css';

interface Props {
  className?: string;
  classes?: {
    saly1?: string;
    root?: string;
  };
}
/* @figmaId 743:12349 */
export const Saly1: FC<Props> = memo(function Saly1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.saly1 || ''} ${classes.saly1}`}></div>
    </div>
  );
});
