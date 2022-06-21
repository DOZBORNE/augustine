import { createTheme } from '@shopify/restyle';

const palette = {
  redLight: '#E64C4C',
  redPrimary: '#e02929ff',
  redDark: '#C41C1C',

  greyLight: '#696367',
  greyPrimary: '#544f52ff',
  greyDark: '#3F3B3E',

  whiteLight: '#fff',
  whitePrimary: '#eff8e2ff',
  whiteDark: '#EDF7DE',

  yellowLight: '#EBD584',
  yellowPrimary: '#e5c961ff',
  yellowDark: '#E0BD3E',

  greenLight: '#9DB36B',
  greenPrimary: '#8aa253ff',
  greenDark: '#738745',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.whitePrimary,

    testRed: palette.redLight,
    // cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    boldTitle: {
      fontFamily: 'inter-bold',
      fontSize: 34,
    },
    body: {
      fontFamily: 'inter-regular',
      fontSize: 17,
    },
  },
});

export type Theme = typeof theme;
export default theme;
