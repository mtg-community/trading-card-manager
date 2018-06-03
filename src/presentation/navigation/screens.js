// @flow strict

import { Navigation } from 'react-native-navigation';
import { SignInScreen } from '../modules/authentication/SignInScreen';
import { ErrorScreen } from '../modules/error/errorScreen';

import { configureStore } from '../redux/index';
import { decorateWithProvider } from './reduxIntegration';
import { HomeScreen } from '../modules/home/HomeScreen';

export const SCREENS = {
  HOME: `navigation.playground.WelcomeScreen`,
  SIGN_IN: `navigation.playground.SignInScreen`,
  ERROR: `navigation.playground.ErrorScreen`,
};

export const registerScreens = () => {
  const store = configureStore();

  Navigation.registerComponent(
    SCREENS.HOME,
    decorateWithProvider(HomeScreen, store),
  );

  Navigation.registerComponent(
    SCREENS.SIGN_IN,
    decorateWithProvider(SignInScreen, store),
  );

  Navigation.registerComponent(
    SCREENS.ERROR,
    decorateWithProvider(ErrorScreen, store),
  );
};
