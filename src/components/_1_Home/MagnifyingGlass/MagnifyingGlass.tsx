import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './MagnifyingGlass.module.css';
import { MagnifyingglassIcon } from './MagnifyingglassIcon';

interface Props {
  className?: string;
  classes?: {
    magnifyingGlass?: string;
    root?: string;
  };
  swap?: {
    magnifyingGlass?: ReactNode;
  };
}
/* @figmaId 534:25661 */
export const MagnifyingGlass: FC<Props> = memo(function MagnifyingGlass(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.magnifyingGlass || ''} ${classes.magnifyingGlass}`}>
        {props.swap?.magnifyingGlass || <MagnifyingglassIcon className={classes.icon} />}
      </div>
    </div>
  );
});
