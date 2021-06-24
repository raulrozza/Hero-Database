import { FC, useCallback, useMemo, useState } from 'react';

import { ThemeProvider as SCThemeProvider } from 'styled-components';

import buildTheme from '@/config/theme';
import { IThemeModes } from '@/shared/domain/providers/IThemeProvider';

import { ThemeContextProvider } from '../../hooks/useThemeProvider';
import GlobalStyles from './styles';

const StyledComponentsThemeContext: FC = ({ children }) => {
    const [mode, setMode] = useState<IThemeModes>('light');

    const theme = useMemo(() => buildTheme(mode), [mode]);

    const toggle = useCallback(
        () => setMode(mode => (mode === 'light' ? 'dark' : 'light')),
        [],
    );

    return (
        <ThemeContextProvider.Provider
            value={{
                mode,
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
