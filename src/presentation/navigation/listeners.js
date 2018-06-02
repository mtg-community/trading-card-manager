// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from './screens';

const initialScreen = SCREENS.HOME;

export const registerListeners = async () =>
  Navigation.events().registerAppLaunchedListener(stackNavivation);

const createComponent = name => ({
  component: {
    name,
  },
});

const children = [
  createComponent(SCREENS.HOME),
  createComponent(SCREENS.SIGN_IN),
];

const options = {
  topBar: {
    hidden: true,
  },
};

const stackNavivation = async () =>
  Navigation.setRoot({
    root: {
      stack: {
        options,
        children,
      },
    },
  });
