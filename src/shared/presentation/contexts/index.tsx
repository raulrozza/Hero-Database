import { FC } from 'react';

import { RecoilRoot } from 'recoil';
import { RecoilURLSyncJSON } from 'recoil-sync';

import { ThemeProvider } from './ThemeProvider';

export * from './ThemeProvider';

const SharedContainer: FC = ({ children }) => (
  <RecoilRoot>
    <RecoilURLSyncJSON location={{ part: 'hash' }}>
      <ThemeProvider>{children}</ThemeProvider>
    </RecoilURLSyncJSON>
  </RecoilRoot>
);

export default SharedContainer;
