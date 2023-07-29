import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Button_RightIconFalseLeftIconT } from '../Button_RightIconFalseLeftIconT/Button_RightIconFalseLeftIconT';
import { Logo } from '../Logo/Logo';
import { MagnifyingGlass } from '../MagnifyingGlass/MagnifyingGlass';
import { TextField_LabelFalseHelperText } from '../TextField_LabelFalseHelperText/TextField_LabelFalseHelperText';
import { Wallet } from '../Wallet/Wallet';
import classes from './Header_LoggedInFalse.module.css';
import { MagnifyingglassIcon } from './MagnifyingglassIcon';
import { VectorIcon } from './VectorIcon';
import { WalletIcon } from './WalletIcon';

interface Props {
  className?: string;
  classes?: {
    baseButton?: string;
    root?: string;
  };
  hide?: {
    rightIcon?: boolean;
    label?: boolean;
    rightAdornment?: boolean;
    helpText?: boolean;
    vector?: boolean;
    ultraNFT?: boolean;
  };
  text?: {
    home?: ReactNode;
    label?: ReactNode;
  };
}
/* @figmaId 740:12160 */
export const Header_LoggedInFalse: FC<Props> = memo(function Header_LoggedInFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.links}>
        {props.text?.home != null ? props.text?.home : <div className={classes.home}>Home</div>}
        <div className={classes.explore}>Explore</div>
        <div className={classes.pages}>Pages</div>
        <div className={classes.contactUs}>Contact us</div>
        <Button_RightIconFalseLeftIconT
          classes={{ baseButton: `${props.classes?.baseButton || ''} ${classes.baseButton}` }}
          swap={{
            plus: (
              <Wallet
                className={classes.wallet2}
                classes={{ wallet: classes.wallet }}
                swap={{
                  wallet: (
                    <div className={classes.wallet}>
                      <WalletIcon className={classes.icon} />
                    </div>
                  ),
                }}
              />
            ),
          }}
          text={{
            label: props.text?.label || <div className={classes.label}>Connect Wallet</div>,
          }}
        />
      </div>
      <div className={classes.logo2}>
        <Logo
          className={classes.logo}
          swap={{
            vector: <VectorIcon className={classes.icon2} />,
          }}
          hide={{
            vector: props.hide?.vector,
          }}
        />
        {!props.hide?.ultraNFT && <div className={classes.ultraNFT}>Ultra NFT</div>}
      </div>
      <TextField_LabelFalseHelperText
        className={classes.textField}
        swap={{
          user: (
            <MagnifyingGlass
              className={classes.user}
              classes={{ magnifyingGlass: classes.magnifyingGlass }}
              swap={{
                magnifyingGlass: (
                  <div className={classes.magnifyingGlass}>
                    <MagnifyingglassIcon className={classes.icon3} />
                  </div>
                ),
              }}
            />
          ),
        }}
        text={{
          placeholder: <div className={classes.placeholder}>Search</div>,
        }}
      />
    </div>
  );
});
