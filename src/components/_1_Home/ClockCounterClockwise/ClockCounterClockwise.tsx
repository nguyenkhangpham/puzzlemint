import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ClockCounterClockwise.module.css';
import { ClockcounterclockwiseIcon } from './ClockcounterclockwiseIcon';

interface Props {
  className?: string;
  classes?: {
    clockCounterClockwise?: string;
    root?: string;
  };
  swap?: {
    clockCounterClockwise?: ReactNode;
  };
}
/* @figmaId 534:27134 */
export const ClockCounterClockwise: FC<Props> = memo(function ClockCounterClockwise(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.clockCounterClockwise || ''} ${classes.clockCounterClockwise}`}>
        {props.swap?.clockCounterClockwise || <ClockcounterclockwiseIcon className={classes.icon} />}
      </div>
    </div>
  );
});
