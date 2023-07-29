import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Adornment_TypeIcon } from '../Adornment_TypeIcon/Adornment_TypeIcon';
import { Adornment_TypeText } from '../Adornment_TypeText/Adornment_TypeText';
import classes from './BaseTextFieldFalse.module.css';

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
/* @figmaId 323:5978 */
export const BaseTextFieldFalse: FC<Props> = memo(function BaseTextFieldFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.label && (
        <div className={classes.label}>
          <div className={classes.label2}>Label</div>
        </div>
      )}
      <div className={classes.input}>
        <Adornment_TypeIcon
          className={classes.leftAdornment}
          swap={{
            user: props.swap?.user,
          }}
        />
        <div className={classes.text}>
          {props.text?.placeholder != null ? (
            props.text?.placeholder
          ) : (
            <div className={classes.placeholder}>Placeholder</div>
          )}
        </div>
        {!props.hide?.rightAdornment && <Adornment_TypeText className={classes.rightAdornment} />}
      </div>
      {!props.hide?.helpText && (
        <div className={classes.helpText}>
          <div className={classes.helperText}>Helper text</div>
        </div>
      )}
    </div>
  );
});
