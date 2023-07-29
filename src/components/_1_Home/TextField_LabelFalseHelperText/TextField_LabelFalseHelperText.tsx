import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BaseTextFieldFalse } from '../BaseTextFieldFalse/BaseTextFieldFalse';
import classes from './TextField_LabelFalseHelperText.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    user?: ReactNode;
  };
  hide?: {
    label?: boolean;
    rightAdornment?: boolean;
    helpText?: boolean;
  };
  text?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 323:18312 */
export const TextField_LabelFalseHelperText: FC<Props> = memo(function TextField_LabelFalseHelperText(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <BaseTextFieldFalse
        className={classes.baseTextFieldFalse}
        swap={{
          user: props.swap?.user,
        }}
        hide={{
          label: true,
          rightAdornment: true,
          helpText: true,
        }}
        text={{
          placeholder: props.text?.placeholder || <div className={classes.placeholder}>Placeholder</div>,
        }}
      />
    </div>
  );
});
