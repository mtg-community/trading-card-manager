import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const statusBarHeight = Platform.OS === 'ios' ? 20 : 24;
const navBarHeight = Platform.OS === 'ios' ? 86 : 80;

export const Metrics = {
  marginHorizontal: 12,
  marginVertical: 12,
  section: 25,
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  horizontalLineHeight: 1,
  textLineHeight: 22,
  searchBarHeight: 30,
  menuHeight: 40,
  inputHeight: 44,
  inputMultilineHeight: 132,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  statusBarHeight,
  navBarHeight,
  navBarWithoutAndroidStatusbar:
    Platform.OS === 'ios' ? navBarHeight : navBarHeight - statusBarHeight,
  navBarButtonHeight: 48,
  singleTitleWrapMargin: 60,
  backButtonInset: Platform.OS === 'ios' ? 5 : 8,
  buttonRadius: 4,
  cardRadius: 8,
  borderWidth: 1,
  maxBorderWidth: 4,
  bookMinHeight: 55,
  iconWidth: 48,
  iconWidthDense: 40,
  icons: {
    tiny: 15,
    small: 18,
    medium: 24,
    large: 32,
    xl: 42,
    xxl: 72,
    xxxl: 96,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300,
  },
};
