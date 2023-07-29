import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { User } from '../User/User';
import classes from './Adornment_TypeIcon.module.css';
import { UserIcon } from './UserIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    user?: ReactNode;
  };
}
/* @figmaId 323:5998 */
export const Adornment_TypeIcon: FC<Props> = memo(function Adornment_TypeIcon(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.user || (
        <User
          className={classes.user2}
          classes={{ user: classes.user }}
          swap={{
            user: (
              <div className={classes.user}>
                <UserIcon className={classes.icon} />
              </div>
            ),
          }}
        />
      )}
    </div>
  );
});
