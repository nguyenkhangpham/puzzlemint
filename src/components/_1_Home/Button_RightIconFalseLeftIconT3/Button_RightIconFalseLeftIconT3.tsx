import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BaseButton_SizeLarge } from '../BaseButton_SizeLarge/BaseButton_SizeLarge';
import classes from './Button_RightIconFalseLeftIconT3.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    rightIcon?: boolean;
    leftIcon?: boolean;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 330:49641 */
export const Button_RightIconFalseLeftIconT3: FC<Props> = memo(function Button_RightIconFalseLeftIconT3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <BaseButton_SizeLarge
        className={classes.baseButton}
        hide={{
          rightIcon: true,
          leftIcon: props.hide?.leftIcon,
        }}
        text={{
          label: props.text?.label,
        }}
      />
    </div>
  );
});
