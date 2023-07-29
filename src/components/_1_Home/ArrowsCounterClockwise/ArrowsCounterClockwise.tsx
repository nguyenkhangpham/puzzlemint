import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ArrowsCounterClockwise.module.css';
import { ArrowscounterclockwiseIcon } from './ArrowscounterclockwiseIcon';

interface Props {
  className?: string;
  classes?: {
    arrowsCounterClockwise?: string;
    root?: string;
  };
  swap?: {
    arrowsCounterClockwise?: ReactNode;
  };
}
/* @figmaId 534:28206 */
export const ArrowsCounterClockwise: FC<Props> = memo(function ArrowsCounterClockwise(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.arrowsCounterClockwise || ''} ${classes.arrowsCounterClockwise}`}>
        {props.swap?.arrowsCounterClockwise || <ArrowscounterclockwiseIcon className={classes.icon} />}
      </div>
    </div>
  );
});
