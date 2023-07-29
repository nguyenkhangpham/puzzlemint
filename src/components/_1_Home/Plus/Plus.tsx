import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Plus.module.css';
import { PlusIcon } from './PlusIcon';

interface Props {
  className?: string;
  classes?: {
    plus?: string;
    root?: string;
  };
  swap?: {
    plus?: ReactNode;
  };
}
/* @figmaId 534:25060 */
export const Plus: FC<Props> = memo(function Plus(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.plus || ''} ${classes.plus}`}>
        {props.swap?.plus || <PlusIcon className={classes.icon} />}
      </div>
    </div>
  );
});
