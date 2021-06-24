import layout from './layout';
import { lightPalette, darkPalette } from './palette';
import typography from './typography';

const buildTheme = (mode: 'light' | 'dark') => ({
    layout,
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography,
});

export default buildTheme;
