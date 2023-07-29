import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Avatar_TypeImagePersonKellyGar } from '../Avatar_TypeImagePersonKellyGar/Avatar_TypeImagePersonKellyGar';
import { Button_RightIconFalseLeftIconT } from '../Button_RightIconFalseLeftIconT/Button_RightIconFalseLeftIconT';
import { ClockCounterClockwise } from '../ClockCounterClockwise/ClockCounterClockwise';
import { CoinsEthereumETH } from '../CoinsEthereumETH/CoinsEthereumETH';
import { Crown } from '../Crown/Crown';
import { Heart } from '../Heart/Heart';
import { Saly19 } from '../Saly19/Saly19';
import classes from './CardOwned.module.css';
import { ClockcounterclockwiseIcon } from './ClockcounterclockwiseIcon';
import { CrownIcon } from './CrownIcon';
import { EthereumEthIcon } from './EthereumEthIcon';
import { HeartIcon } from './HeartIcon';

interface Props {
  className?: string;
  classes?: {
    _11?: string;
    avatar?: string;
  };
  hide?: {
    rightIcon?: boolean;
    rightIcon2?: boolean;
    heart?: boolean;
    coinsEthereumETH?: boolean;
  };
  text?: {
    metaverse?: ReactNode;
    ownedByJohnDoe?: ReactNode;
    _372?: ReactNode;
    _50ETH?: ReactNode;
    label?: ReactNode;
  };
}
/* @figmaId 752:13920 */
export const CardOwned: FC<Props> = memo(function CardOwned(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image}>
        <Saly19 className={classes.saly19} classes={{ _11: `${props.classes?._11 || ''} ${classes._11}` }} />
      </div>
      <div className={classes.content}>
        <div className={classes.content2}>
          <Avatar_TypeImagePersonKellyGar
            className={classes.avatar2}
            classes={{ avatar: `${props.classes?.avatar || ''} ${classes.avatar}` }}
          />
          <div className={classes.text}>
            {props.text?.metaverse != null ? props.text?.metaverse : <div className={classes.metaverse}>Metaverse</div>}
            {props.text?.ownedByJohnDoe != null ? (
              props.text?.ownedByJohnDoe
            ) : (
              <div className={classes.ownedByJohnDoe}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label3}>Owned by </span>
                  <span className={classes.label4}>John Doe</span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.item}>
            {!props.hide?.heart && (
              <Heart
                className={classes.heart2}
                classes={{ heart: classes.heart }}
                swap={{
                  heart: (
                    <div className={classes.heart}>
                      <HeartIcon className={classes.icon} />
                    </div>
                  ),
                }}
              />
            )}
            {props.text?._372 != null ? props.text?._372 : <div className={classes._372}>372</div>}
          </div>
          <div className={classes.item2}>
            {!props.hide?.coinsEthereumETH && (
              <CoinsEthereumETH
                className={classes.coinsEthereumETH}
                classes={{ ethereumETH: classes.ethereumETH }}
                swap={{
                  ethereumETH: (
                    <div className={classes.ethereumETH}>
                      <EthereumEthIcon className={classes.icon2} />
                    </div>
                  ),
                }}
              />
            )}
            {props.text?._50ETH != null ? (
              props.text?._50ETH
            ) : (
              <div className={classes._50ETH}>
                <p className={classes.labelWrapper2}>
                  <span className={classes.label5}>5.00</span>
                  <span className={classes.label6}>ETH</span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={classes.buttons}>
          <Button_RightIconFalseLeftIconT
            className={classes.button}
            classes={{ baseButton: classes.baseButton }}
            swap={{
              plus: (
                <ClockCounterClockwise
                  className={classes.clockCounterClockwise2}
                  classes={{ clockCounterClockwise: classes.clockCounterClockwise }}
                  swap={{
                    clockCounterClockwise: (
                      <div className={classes.clockCounterClockwise}>
                        <ClockcounterclockwiseIcon className={classes.icon3} />
                      </div>
                    ),
                  }}
                />
              ),
            }}
            text={{
              label: <div className={classes.label}>View History</div>,
            }}
          />
          <Button_RightIconFalseLeftIconT
            className={classes.button2}
            classes={{ baseButton: classes.baseButton2 }}
            swap={{
              plus: (
                <Crown
                  className={classes.crown2}
                  classes={{ crown: classes.crown }}
                  swap={{
                    crown: (
                      <div className={classes.crown}>
                        <CrownIcon className={classes.icon4} />
                      </div>
                    ),
                  }}
                />
              ),
            }}
            text={{
              label: props.text?.label || <div className={classes.label2}>Place Bid</div>,
            }}
          />
        </div>
      </div>
    </div>
  );
});
