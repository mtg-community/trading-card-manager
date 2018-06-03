// @flow strict

import { Navigation } from 'react-native-navigation';
import { SignInScreen } from '../modules/authentication/signInScreen';
import { ErrorScreen } from '../modules/error/errorScreen';
import { HomeScreen } from '../modules/home/homeScreen';

import { withReduxProvider } from './reduxIntegration';

export const SCREENS = {
  HOME: `navigation.mtgx.WelcomeScreen`,
  SIGN_IN: `navigation.mtgx.SignInScreen`,
  ERROR: `navigation.mtgx.ErrorScreen`,
};

export const registerScreens = () => {
  Navigation.registerComponent(SCREENS.HOME, withReduxProvider(HomeScreen));

  Navigation.registerComponent(
    SCREENS.SIGN_IN,
    withReduxProvider(SignInScreen),
  );

  Navigation.registerComponent(SCREENS.ERROR, withReduxProvider(ErrorScreen));
};
