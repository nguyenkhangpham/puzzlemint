import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Wallet.module.css';
import { WalletIcon } from './WalletIcon';

interface Props {
  className?: string;
  classes?: {
    wallet?: string;
    root?: string;
  };
  swap?: {
    wallet?: ReactNode;
  };
}
/* @figmaId 534:23905 */
export const Wallet: FC<Props> = memo(function Wallet(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.wallet || ''} ${classes.wallet}`}>
        {props.swap?.wallet || <WalletIcon className={classes.icon} />}
      </div>
    </div>
  );
});
