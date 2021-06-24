import { createContext, useContext } from 'react';

import { isEmpty } from 'lodash';

import IThemeProvider from '@/shared/domain/providers/IThemeProvider';

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
