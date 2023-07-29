import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Crown.module.css';
import { CrownIcon } from './CrownIcon';

interface Props {
  className?: string;
  classes?: {
    crown?: string;
    root?: string;
  };
  swap?: {
    crown?: ReactNode;
  };
}
/* @figmaId 534:26922 */
export const Crown: FC<Props> = memo(function Crown(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.crown || ''} ${classes.crown}`}>
        {props.swap?.crown || <CrownIcon className={classes.icon} />}
      </div>
    </div>
  );
});
