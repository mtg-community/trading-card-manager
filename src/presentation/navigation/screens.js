// @flow strict

import { Navigation } from 'react-native-navigation';
import { SignInScreen } from '../modules/authentication/signInScreen';
import { SignUpScreen } from '../modules/authentication/signUpScreen';
import { ErrorScreen } from '../modules/error/errorScreen';
import { HomeScreen } from '../modules/home/homeScreen';

import { withReduxProvider } from './reduxIntegration';

export const SCREENS = {
  HOME: `navigation.mtgx.WelcomeScreen`,
  ERROR: `navigation.mtgx.ErrorScreen`,
  SIGN_IN: `authentication.mtgx.SignInScreen`,
  SIGN_UP: `authentication.mtgx.SignUpScreen`,
  FORGOT_PASSWORD: `authentication.mtgx.ForgotPassword`,
};

export const registerScreens = () => {
  Navigation.registerComponent(SCREENS.HOME, withReduxProvider(HomeScreen));
  Navigation.registerComponent(SCREENS.ERROR, withReduxProvider(ErrorScreen));

  Navigation.registerComponent(
    SCREENS.SIGN_IN,
    withReduxProvider(SignInScreen),
  );

  Navigation.registerComponent(
    SCREENS.SIGN_UP,
    withReduxProvider(SignUpScreen),
  );
};
