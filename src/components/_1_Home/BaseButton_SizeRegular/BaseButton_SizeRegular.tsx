import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { CaretDown } from '../CaretDown/CaretDown';
import { Plus } from '../Plus/Plus';
import classes from './BaseButton_SizeRegular.module.css';
import { CaretdownIcon } from './CaretdownIcon';
import { PlusIcon } from './PlusIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    plus?: ReactNode;
  };
  hide?: {
    rightIcon?: boolean;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 315:124 */
export const BaseButton_SizeRegular: FC<Props> = memo(function BaseButton_SizeRegular(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.leftIcon}>
        {props.swap?.plus || (
          <Plus
            className={classes.plus2}
            classes={{ plus: classes.plus }}
            swap={{
              plus: (
                <div className={classes.plus}>
                  <PlusIcon className={classes.icon} />
                </div>
              ),
            }}
          />
        )}
      </div>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Button</div>}
      {!props.hide?.rightIcon && (
        <div className={classes.rightIcon}>
          <CaretDown
            className={classes.caretDown2}
            classes={{ caretDown: classes.caretDown }}
            swap={{
              caretDown: (
                <div className={classes.caretDown}>
                  <CaretdownIcon className={classes.icon2} />
                </div>
              ),
            }}
          />
        </div>
      )}
    </button>
  );
});
