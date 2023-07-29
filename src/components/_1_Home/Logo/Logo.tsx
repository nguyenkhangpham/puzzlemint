import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Logo.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
  hide?: {
    vector?: boolean;
  };
}
/* @figmaId 553:6722 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.vector && (
        <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
      )}
    </div>
  );
});
