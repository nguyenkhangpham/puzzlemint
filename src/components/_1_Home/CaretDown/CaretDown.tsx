import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CaretDown.module.css';
import { CaretdownIcon } from './CaretdownIcon';

interface Props {
  className?: string;
  classes?: {
    caretDown?: string;
    root?: string;
  };
  swap?: {
    caretDown?: ReactNode;
  };
}
/* @figmaId 534:27462 */
export const CaretDown: FC<Props> = memo(function CaretDown(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.caretDown || ''} ${classes.caretDown}`}>
        {props.swap?.caretDown || <CaretdownIcon className={classes.icon} />}
      </div>
    </div>
  );
});
