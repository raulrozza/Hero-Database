import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ThemeProvider as SCThemeProvider } from 'styled-components';

import buildTheme from '@/config/theme';
import makeStorageProvider from '@/shared/infra/providers/makeStorageProvider';

import GlobalStyles from './styles';
import {
  ThemeContextProvider,
  IThemeProvider,
} from '../../hooks/useThemeProvider';

const STORAGE_KEY = '@MeM/theme';

const StyledComponentsThemeContext: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<IThemeProvider['name']>('light');

  useEffect(() => {
    const storage = makeStorageProvider();

    const storedTheme = storage.get<IThemeProvider['name']>(STORAGE_KEY);

    if (storedTheme) {
      setName(storedTheme);

      return;
    }

    const userPrefersDarkTheme = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    const theme: IThemeProvider['name'] = userPrefersDarkTheme
      ? 'dark'
      : 'light';

    storage.store(STORAGE_KEY, theme);

    setName(theme);
  }, []);

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
