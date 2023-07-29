import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Heart.module.css';
import { HeartIcon } from './HeartIcon';

interface Props {
  className?: string;
  classes?: {
    heart?: string;
    root?: string;
  };
  swap?: {
    heart?: ReactNode;
  };
}
/* @figmaId 534:26026 */
export const Heart: FC<Props> = memo(function Heart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.heart || ''} ${classes.heart}`}>
        {props.swap?.heart || <HeartIcon className={classes.icon} />}
      </div>
    </div>
  );
});
