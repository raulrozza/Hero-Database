import { DefaultTheme } from 'styled-components';

export type IThemeModes = 'light' | 'dark';

export default interface IThemeProvider {
    theme: DefaultTheme;
    mode: IThemeModes;
    toggle(): void;
}
