import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CoinsEthereumETH.module.css';
import { EthereumEthIcon } from './EthereumEthIcon';

interface Props {
  className?: string;
  classes?: {
    ethereumETH?: string;
    root?: string;
  };
  swap?: {
    ethereumETH?: ReactNode;
  };
}
/* @figmaId 650:10936 */
export const CoinsEthereumETH: FC<Props> = memo(function CoinsEthereumETH(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.ethereumETH || ''} ${classes.ethereumETH}`}>
        {props.swap?.ethereumETH || <EthereumEthIcon className={classes.icon} />}
      </div>
    </div>
  );
});
