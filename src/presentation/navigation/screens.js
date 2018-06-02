// @flow strict

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { SignInScreen } from '../modules/authentication/SignInScreen';

import { getStore } from '../redux';
import { decorateWithProvider } from './reduxIntegration';
import { HomeScreen } from '../modules/home/HomeScreen';

export const SCREENS = {
  HOME: `navigation.playground.WelcomeScreen`,
  SIGN_IN: `navigation.playground.SignInScreen`,
};

export const registerScreens = () => {
  const store = getStore();

  Navigation.registerComponent(
    SCREENS.HOME,
    decorateWithProvider(HomeScreen, store, Provider),
  );

  Navigation.registerComponent(
    SCREENS.SIGN_IN,
    decorateWithProvider(SignInScreen, store, Provider),
  );
};
