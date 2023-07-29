import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar_TypeImagePersonKellyGar.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar?: string;
    root?: string;
  };
}
/* @figmaId 386:9168 */
export const Avatar_TypeImagePersonKellyGar: FC<Props> = memo(function Avatar_TypeImagePersonKellyGar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.avatar || ''} ${classes.avatar}`}></div>
    </div>
  );
});
