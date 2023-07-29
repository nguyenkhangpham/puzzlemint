import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BaseButton_SizeLarge } from '../BaseButton_SizeLarge/BaseButton_SizeLarge';
import classes from './Button_RightIconFalseLeftIconT2.module.css';

interface Props {
  className?: string;
  classes?: {
    baseButton?: string;
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
/* @figmaId 315:338 */
export const Button_RightIconFalseLeftIconT2: FC<Props> = memo(function Button_RightIconFalseLeftIconT2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <BaseButton_SizeLarge
        className={`${props.classes?.baseButton || ''} ${classes.baseButton}`}
        swap={{
          plus: props.swap?.plus,
        }}
        hide={{
          rightIcon: true,
        }}
        text={{
          label: props.text?.label,
        }}
      />
    </div>
  );
});
