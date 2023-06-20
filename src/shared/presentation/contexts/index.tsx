import { FC } from 'react';

import { RecoilRoot } from 'recoil';

import { ThemeProvider } from './ThemeProvider';

export * from './ThemeProvider';

const SharedContainer: FC = ({ children }) => (
  <RecoilRoot>
    <ThemeProvider>{children}</ThemeProvider>
  </RecoilRoot>
);

export default SharedContainer;
