import { createContext, useContext } from 'react';

import { isEmpty } from 'lodash';

import { ITheme } from '@/config/theme';

type ThemeName = 'light' | 'dark';

export interface IThemeProvider {
  theme: ITheme;
  name: ThemeName;
  toggle(): void;
}

export const ThemeContextProvider = createContext<IThemeProvider>(
  {} as IThemeProvider,
);

const useThemeProvider = (): IThemeProvider => {
  const themeProvider = useContext(ThemeContextProvider);

  if (isEmpty(themeProvider))
    throw new Error(
      'useThemeProvider should be called inside a ThemeContextProvider',
    );

  return themeProvider;
};

export default useThemeProvider;
