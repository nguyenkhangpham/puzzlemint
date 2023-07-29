import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './_1_Home.module.css';
import { _10pxUniformGridIcon } from './_10pxUniformGridIcon';
import { ArrowsCounterClockwise } from './ArrowsCounterClockwise/ArrowsCounterClockwise';
import { ArrowscounterclockwiseIcon } from './ArrowscounterclockwiseIcon';
import { BaseButton_SizeLarge } from './BaseButton_SizeLarge/BaseButton_SizeLarge';
import { BgIcon } from './BgIcon';
import { BgIcon2 } from './BgIcon2';
import { BgIcon3 } from './BgIcon3';
import { BgIcon4 } from './BgIcon4';
import { BgIcon5 } from './BgIcon5';
import { BgIcon6 } from './BgIcon6';
import { Button_RightIconFalseLeftIconT2 } from './Button_RightIconFalseLeftIconT2/Button_RightIconFalseLeftIconT2';
import { Button_RightIconFalseLeftIconT3 } from './Button_RightIconFalseLeftIconT3/Button_RightIconFalseLeftIconT3';
import { CardOwned } from './CardOwned/CardOwned';
import { Ellipse15Icon } from './Ellipse15Icon';
import { Ellipse17Icon } from './Ellipse17Icon';
import { Ellipse18Icon } from './Ellipse18Icon';
import { EllipseIcon } from './EllipseIcon';
import { EllipseIcon2 } from './EllipseIcon2';
import { EllipseIcon3 } from './EllipseIcon3';
import { EllipseIcon4 } from './EllipseIcon4';
import { Header_LoggedInFalse } from './Header_LoggedInFalse/Header_LoggedInFalse';
import { Plus } from './Plus/Plus';
import { PlusIcon } from './PlusIcon';
import { RocketLaunch } from './RocketLaunch/RocketLaunch';
import { RocketlaunchIcon } from './RocketlaunchIcon';
import { Saly1 } from './Saly1/Saly1';
import { Saly43 } from './Saly43/Saly43';
import { Saly44 } from './Saly44/Saly44';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  hide?: {
    rightIcon?: boolean;
    vector?: boolean;
    ultraNFT?: boolean;
    label?: boolean;
    rightAdornment?: boolean;
    helpText?: boolean;
    rightIcon2?: boolean;
    rightIcon3?: boolean;
    heart?: boolean;
    coinsEthereumETH?: boolean;
    rightIcon4?: boolean;
    rightIcon5?: boolean;
    heart2?: boolean;
    coinsEthereumETH2?: boolean;
    rightIcon6?: boolean;
    rightIcon7?: boolean;
    heart3?: boolean;
    coinsEthereumETH3?: boolean;
    rightIcon8?: boolean;
    rightIcon9?: boolean;
    heart4?: boolean;
    coinsEthereumETH4?: boolean;
    rightIcon10?: boolean;
    rightIcon11?: boolean;
    heart5?: boolean;
    coinsEthereumETH5?: boolean;
    rightIcon12?: boolean;
    rightIcon13?: boolean;
    heart6?: boolean;
    coinsEthereumETH6?: boolean;
    rightIcon14?: boolean;
    rightIcon15?: boolean;
    rightIcon16?: boolean;
    leftIcon?: boolean;
    rightIcon17?: boolean;
    leftIcon2?: boolean;
    rightIcon18?: boolean;
    leftIcon3?: boolean;
    rightIcon19?: boolean;
    leftIcon4?: boolean;
    rightIcon20?: boolean;
  };
}
/* @figmaId 1042:3955 */
export const _1_Home: FC<Props> = memo(function _1_Home(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.bG}>
        <BgIcon className={classes.icon4} />
      </div>
      <div className={classes.bG2}>
        <BgIcon2 className={classes.icon5} />
      </div>
      <div className={classes.bG3}>
        <BgIcon3 className={classes.icon6} />
      </div>
      <div className={classes.bG4}>
        <BgIcon4 className={classes.icon7} />
      </div>
      <Header_LoggedInFalse
        className={classes.header}
        classes={{ baseButton: classes.baseButton }}
        hide={{
          vector: true,
          ultraNFT: true,
        }}
        text={{
          home: <div className={classes.home}>Home</div>,
          label: <div className={classes.label}>0x5d06Fd...E1F9</div>,
        }}
      />
      <div className={classes.ellipse15}>
        <Ellipse15Icon className={classes.icon8} />
      </div>
      <div className={classes.ellipse18}>
        <Ellipse18Icon className={classes.icon9} />
      </div>
      <div className={classes.ellipse17}>
        <Ellipse17Icon className={classes.icon10} />
      </div>
      <div className={classes.p}>P</div>
      <div className={classes.puzzleMint}>puzzle mint</div>
      <div className={classes.frame1}>
        <div className={classes.gridVisualization}>
          <div className={classes._10pxUniformGrid}>
            <_10pxUniformGridIcon className={classes.icon11} />
          </div>
        </div>
      </div>
      <div className={classes.bG5}>
        <BgIcon5 className={classes.icon12} />
      </div>
      <div className={classes.hero}>
        <div className={classes.content}>
          <div className={classes._1PerPixelOwnAPieceOfWeb3Histor}>
            <div className={classes.textBlock25}>1$ per pixel</div>
            <div className={classes.textBlock26}>Own a piece of web3 history!</div>
          </div>
          <div className={classes.nFTIsTheWorldSFirstAndLargestN}>
            NFT is the world&#39;s first and largest NFT marketplace
          </div>
          <div className={classes.buttons}>
            <Button_RightIconFalseLeftIconT2
              classes={{ baseButton: classes.baseButton2 }}
              swap={{
                plus: (
                  <RocketLaunch
                    className={classes.rocketLaunch2}
                    classes={{ rocketLaunch: classes.rocketLaunch }}
                    swap={{
                      rocketLaunch: (
                        <div className={classes.rocketLaunch}>
                          <RocketlaunchIcon className={classes.icon} />
                        </div>
                      ),
                    }}
                  />
                ),
              }}
              text={{
                label: <div className={classes.label2}>Explore</div>,
              }}
            />
            <Button_RightIconFalseLeftIconT3
              text={{
                label: <div className={classes.label3}>Mint segment</div>,
              }}
            />
          </div>
        </div>
        <div className={classes.image}>
          <div className={classes.vector}>
            <VectorIcon className={classes.icon13} />
          </div>
          <div className={classes.ellipse}>
            <EllipseIcon className={classes.icon14} />
          </div>
          <div className={classes.ellipse2}>
            <EllipseIcon2 className={classes.icon15} />
          </div>
          <div className={classes.ellipse3}>
            <EllipseIcon3 className={classes.icon16} />
          </div>
          <div className={classes.ellipse4}>
            <EllipseIcon4 className={classes.icon17} />
          </div>
          <Saly44 className={classes.saly442} classes={{ saly44: classes.saly44 }} />
          <Saly1 className={classes.saly12} classes={{ saly1: classes.saly1 }} />
          <Saly43 className={classes.saly432} classes={{ saly43: classes.saly43 }} />
        </div>
      </div>
      <div className={classes.art}></div>
      <div className={classes.art2}></div>
      <div className={classes.art3}></div>
      <div className={classes.image2}></div>
      <div className={classes.rectangle14}></div>
      <div className={classes.rectangle12}></div>
      <div className={classes.unsplash3MAmj1ZKSZA}></div>
      <div className={classes.rectangle8}></div>
      <div className={classes.art4}></div>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle15}></div>
      <div className={classes.label27}>120 x 80</div>
      <div className={classes.liveAuctions}>
        <div className={classes.title}>
          <div className={classes.myNFTs}>My NFTs</div>
        </div>
        <div className={classes.content2}>
          <div className={classes.slider}>
            <div className={classes.row}>
              <CardOwned
                classes={{ _11: classes._11, avatar: classes.avatar }}
                hide={{
                  heart: true,
                  coinsEthereumETH: true,
                }}
                text={{
                  metaverse: <div className={classes.metaverse}>Astronaut</div>,
                  ownedByJohnDoe: (
                    <div className={classes.ownedByJohnDoe}>
                      <p className={classes.labelWrapper}>
                        <span className={classes.label4}>Owned by </span>
                        <span className={classes.label5}>Khang Pham</span>
                      </p>
                    </div>
                  ),
                  _372: (
                    <div className={classes._372}>
                      <div className={classes.textBlock}>Segment size:</div>
                      <div className={classes.textBlock2}> 390x400</div>
                    </div>
                  ),
                  _50ETH: (
                    <div className={classes._50ETH}>
                      <div className={classes.textBlock3}>Floor price:</div>
                      <div className={classes.textBlock4}>156000$</div>
                    </div>
                  ),
                  label: <div className={classes.label6}>Edit</div>,
                }}
              />
              <CardOwned
                classes={{ _11: classes._112, avatar: classes.avatar2 }}
                hide={{
                  heart: true,
                  coinsEthereumETH: true,
                }}
                text={{
                  metaverse: <div className={classes.metaverse2}>Pink Power Ranger</div>,
                  ownedByJohnDoe: (
                    <div className={classes.ownedByJohnDoe2}>
                      <p className={classes.labelWrapper2}>
                        <span className={classes.label7}>Owned by </span>
                        <span className={classes.label8}>Khang Pham</span>
                      </p>
                    </div>
                  ),
                  _372: (
                    <div className={classes._3722}>
                      <div className={classes.textBlock5}>Segment size:</div>
                      <div className={classes.textBlock6}>270x300</div>
                    </div>
                  ),
                  _50ETH: (
                    <div className={classes._50ETH2}>
                      <div className={classes.textBlock7}>Floor price:</div>
                      <div className={classes.textBlock8}>81000$</div>
                    </div>
                  ),
                  label: <div className={classes.label9}>Edit</div>,
                }}
              />
              <CardOwned
                classes={{ _11: classes._113, avatar: classes.avatar3 }}
                hide={{
                  heart: true,
                  coinsEthereumETH: true,
                }}
                text={{
                  metaverse: <div className={classes.metaverse3}>Meta boy</div>,
                  ownedByJohnDoe: (
                    <div className={classes.ownedByJohnDoe3}>
                      <p className={classes.labelWrapper3}>
                        <span className={classes.label10}>Owned by </span>
                        <span className={classes.label11}>Khang Pham</span>
                      </p>
                    </div>
                  ),
                  _372: (
                    <div className={classes._3723}>
                      <div className={classes.textBlock9}>Segment size:</div>
                      <div className={classes.textBlock10}>240x260</div>
                    </div>
                  ),
                  _50ETH: (
                    <div className={classes._50ETH3}>
                      <div className={classes.textBlock11}>Floor price:</div>
                      <div className={classes.textBlock12}>62400$</div>
                    </div>
                  ),
                  label: <div className={classes.label12}>Edit</div>,
                }}
              />
            </div>
            <div className={classes.row2}>
              <CardOwned
                classes={{ _11: classes._114, avatar: classes.avatar4 }}
                hide={{
                  heart: true,
                  coinsEthereumETH: true,
                }}
                text={{
                  metaverse: <div className={classes.metaverse4}>Streetart</div>,
                  ownedByJohnDoe: (
                    <div className={classes.ownedByJohnDoe4}>
                      <p className={classes.labelWrapper4}>
                        <span className={classes.label13}>Owned by </span>
                        <span className={classes.label14}>Khang Pham</span>
                      </p>
                    </div>
                  ),
                  _372: (
                    <div className={classes._3724}>
                      <div className={classes.textBlock13}>Segment size:</div>
                      <div className={classes.textBlock14}> 220x210</div>
                    </div>
                  ),
                  _50ETH: (
                    <div className={classes._50ETH4}>
                      <div className={classes.textBlock15}>Floor price:</div>
                      <div className={classes.textBlock16}>46200$</div>
                    </div>
                  ),
                  label: <div className={classes.label15}>Edit</div>,
                }}
              />
              <CardOwned
                classes={{ _11: classes._115, avatar: classes.avatar5 }}
                hide={{
                  heart: true,
                  coinsEthereumETH: true,
                }}
                text={{
                  metaverse: <div className={classes.metaverse5}>Handsup</div>,
                  ownedByJohnDoe: (
                    <div className={classes.ownedByJohnDoe5}>
                      <p className={classes.labelWrapper5}>
                        <span className={classes.label16}>Owned by </span>
                        <span className={classes.label17}>Khang Pham</span>
                      </p>
                    </div>
                  ),
                  _372: (
                    <div className={classes._3725}>
                      <div className={classes.textBlock17}>Segment size:</div>
                      <div className={classes.textBlock18}>130x110</div>
                    </div>
                  ),
                  _50ETH: (
                    <div className={classes._50ETH5}>
                      <div className={classes.textBlock19}>Floor price:</div>
                      <div className={classes.textBlock20}>14300$</div>
                    </div>
                  ),
                  label: <div className={classes.label18}>Edit</div>,
                }}
              />
              <CardOwned
                classes={{ _11: classes._116, avatar: classes.avatar6 }}
                hide={{
                  heart: true,
                  coinsEthereumETH: true,
                }}
                text={{
                  ownedByJohnDoe: (
                    <div className={classes.ownedByJohnDoe6}>
                      <p className={classes.labelWrapper6}>
                        <span className={classes.label19}>Owned by </span>
                        <span className={classes.label20}>Khang Pham</span>
                      </p>
                    </div>
                  ),
                  _372: (
                    <div className={classes._3726}>
                      <div className={classes.textBlock21}>Segment size:</div>
                      <div className={classes.textBlock22}> 90x80</div>
                    </div>
                  ),
                  _50ETH: (
                    <div className={classes._50ETH6}>
                      <div className={classes.textBlock23}>Floor price:</div>
                      <div className={classes.textBlock24}>7200$</div>
                    </div>
                  ),
                  label: <div className={classes.label21}>Edit</div>,
                }}
              />
            </div>
          </div>
          <Button_RightIconFalseLeftIconT2
            classes={{ baseButton: classes.baseButton3 }}
            swap={{
              plus: (
                <ArrowsCounterClockwise
                  className={classes.arrowsCounterClockwise2}
                  classes={{ arrowsCounterClockwise: classes.arrowsCounterClockwise }}
                  swap={{
                    arrowsCounterClockwise: (
                      <div className={classes.arrowsCounterClockwise}>
                        <ArrowscounterclockwiseIcon className={classes.icon2} />
                      </div>
                    ),
                  }}
                />
              ),
            }}
            text={{
              label: <div className={classes.label22}>Load More</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.rectangle9}></div>
      <div className={classes.art5}></div>
      <div className={classes.frame3}>
        <div className={classes.bG6}>
          <BgIcon6 className={classes.icon18} />
        </div>
        <BaseButton_SizeLarge
          className={classes.baseButton4}
          hide={{
            leftIcon: true,
            rightIcon: true,
          }}
          text={{
            label: <div className={classes.label23}>Mint segment</div>,
          }}
        />
        <div className={classes.leftIcon}>
          <Plus
            className={classes.plus2}
            classes={{ plus: classes.plus }}
            swap={{
              plus: (
                <div className={classes.plus}>
                  <PlusIcon className={classes.icon3} />
                </div>
              ),
            }}
          />
        </div>
        <div className={classes.youHaveSelectedA240x260PixelSe}>You have selected a 240x260 pixel segment</div>
        <Button_RightIconFalseLeftIconT3
          className={classes.button}
          hide={{
            leftIcon: true,
          }}
          text={{
            label: <div className={classes.label24}>Select image</div>,
          }}
        />
        <div className={classes.rectangle82}></div>
        <div className={classes.tiltle}>Tiltle:</div>
        <div className={classes.link}>Link:</div>
        <div className={classes.metaBoy}>Meta boy</div>
        <div className={classes.metaboyNetwork}>metaboy.network</div>
        <div className={classes.rectangle16}></div>
        <div className={classes.rectangle17}></div>
        <BaseButton_SizeLarge
          className={classes.baseButton5}
          hide={{
            leftIcon: true,
            rightIcon: true,
          }}
          text={{
            label: <div className={classes.label25}>Mint segment</div>,
          }}
        />
        <BaseButton_SizeLarge
          className={classes.baseButton6}
          hide={{
            leftIcon: true,
            rightIcon: true,
          }}
          text={{
            label: <div className={classes.label26}>SUCCESSFUL!</div>,
          }}
        />
      </div>
    </div>
  );
});
