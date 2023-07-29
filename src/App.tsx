import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { _1_Home } from './components/_1_Home/_1_Home';
import resets from './components/_resets.module.css';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_1_Home />
    </div>
  );
});
