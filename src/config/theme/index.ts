import layout from './layout';
import { lightPalette, darkPalette } from './palette';
import typography from './typography';

export interface ITheme {
    layout: typeof layout;
    palette: typeof lightPalette;
    typography: typeof typography;
}

const buildTheme = (mode: 'light' | 'dark'): ITheme => ({
    layout,
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography,
});

export default buildTheme;
