import { FC } from 'react';

import { RecoilRoot } from 'recoil';

import { HashKeyStateProvider } from './HashKeyStateProvider';
import { ThemeProvider } from './ThemeProvider';

export * from './HashKeyStateProvider';
export * from './ThemeProvider';

const SharedContainer: FC = ({ children }) => (
  <RecoilRoot>
    <HashKeyStateProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HashKeyStateProvider>
  </RecoilRoot>
);

export default SharedContainer;
