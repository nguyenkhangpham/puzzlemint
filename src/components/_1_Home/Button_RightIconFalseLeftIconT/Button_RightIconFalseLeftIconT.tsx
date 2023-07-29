import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BaseButton_SizeRegular } from '../BaseButton_SizeRegular/BaseButton_SizeRegular';
import classes from './Button_RightIconFalseLeftIconT.module.css';

interface Props {
  className?: string;
  classes?: {
    baseButton?: string;
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
/* @figmaId 315:334 */
export const Button_RightIconFalseLeftIconT: FC<Props> = memo(function Button_RightIconFalseLeftIconT(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <BaseButton_SizeRegular
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
