import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './RocketLaunch.module.css';
import { RocketlaunchIcon } from './RocketlaunchIcon';

interface Props {
  className?: string;
  classes?: {
    rocketLaunch?: string;
    root?: string;
  };
  swap?: {
    rocketLaunch?: ReactNode;
  };
}
/* @figmaId 534:24843 */
export const RocketLaunch: FC<Props> = memo(function RocketLaunch(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rocketLaunch || ''} ${classes.rocketLaunch}`}>
        {props.swap?.rocketLaunch || <RocketlaunchIcon className={classes.icon} />}
      </div>
    </div>
  );
});
