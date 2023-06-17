import { FC, useCallback, useMemo, useState } from 'react';

import { ThemeProvider as SCThemeProvider } from 'styled-components';

import buildTheme from '@/config/theme';

import GlobalStyles from './styles';
import {
  ThemeContextProvider,
  IThemeProvider,
} from '../../hooks/useThemeProvider';

const StyledComponentsThemeContext: FC = ({ children }) => {
  const [name, setName] = useState<IThemeProvider['name']>('light');

  const theme = useMemo(() => buildTheme(name), [name]);

  const toggle = useCallback(
    () => setName(name => (name === 'light' ? 'dark' : 'light')),
    [],
  );

  return (
    <ThemeContextProvider.Provider
      value={{
        name,
        theme,
        toggle,
      }}
    >
      <SCThemeProvider theme={theme}>
        <GlobalStyles />

        {children}
      </SCThemeProvider>
    </ThemeContextProvider.Provider>
  );
};

export default StyledComponentsThemeContext;
