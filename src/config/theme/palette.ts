export const lightPalette = {
  primary: {
    300: '#FC9D83',
    500: '#D83A0E',
    800: '#782008',
  },
  secondary: {
    300: '#F7DF88',
    500: '#F2CB40',
    800: '#D7AB0F',
  },
  contrast: {
    300: '#66C6FF',
    500: '#20A4F3',
    800: '#157AB7',
  },
  error: {
    300: '#FE6776',
    500: '#C20114',
    800: '#790612',
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2EDF0',
    300: '#CBD7E1',
    400: '#94A7B8',
    500: '#647487',
    600: '#485A6A',
    700: '#344556',
    800: '#1E2C38',
    900: '#0F1A29',
  },
  text: {
    main: '#181E21',
    light: '#454D4F',
    black: '#181E21',
    white: '#F9FBFB',
  },
};

type Palette = typeof lightPalette;

export const darkPalette: Palette = {
  primary: {
    300: '#CC94EB',
    500: '#AB3BE8',
    800: '#6F12A1',
  },
  secondary: {
    300: '#ea8276',
    500: '#EB4D3B',
    800: '#B21B0A',
  },
  contrast: {
    300: '#91FF85',
    500: '#58EB47',
    800: '#2DAD1F',
  },
  error: {
    300: '#F47180',
    500: '#EF233C',
    800: '#8E0B1A',
  },
  neutral: {
    50: '#151226',
    100: '#252334',
    200: '#3E3B4F',
    300: '#514C67',
    400: '#6E6783',
    500: '#9F9DAF',
    600: '#D1CFDD',
    700: '#E3E1EF',
    800: '#F1F1F9',
    900: '#F9F8FC',
  },
  text: {
    main: '#F9FBFB',
    light: '#BEC7CA',
    black: '#181E21',
    white: '#F9FBFB',
  },
};
