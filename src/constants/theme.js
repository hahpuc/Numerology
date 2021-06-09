import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#E6E0D3', // Light Yellow
  secondary: '#42413D', // Dark Gray

  brown: '#817E79',
  brownCard: '#A69F91',
  orangeCard: '#ff7e52',

  black: '#1E1F20',
  blackBlur: 'rgba(0, 0, 0, 0.6)',

  white: '#FFFFFF',

  lightGray: '#eff2f5',
  gray: '#BEC1D2',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 20,
  logoTitle: 32,
  h1: 30,
  h2: 22,
  h3: 17,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 17,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-Light',
    fontSize: SIZES.largeTitle
  },
  logoTitle: {
    fontFamily: 'Roboto-Light',
    fontSize: SIZES.logoTitle
  },
  h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },

  body1: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22 },

  light1: { fontFamily: 'Roboto-Light', fontSize: SIZES.body1, lineHeight: 36 },
  light2: { fontFamily: 'Roboto-Light', fontSize: SIZES.body2, lineHeight: 30 },
  light3: { fontFamily: 'Roboto-Light', fontSize: SIZES.body3, lineHeight: 22 },
  light4: { fontFamily: 'Roboto-Light', fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
