import { FC } from 'react';

import { ThemeProvider } from './ThemeProvider';

export * from './ThemeProvider';

const SharedContainer: FC = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default SharedContainer;
