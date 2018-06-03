// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from './screens';

const initialScreen = SCREENS.HOME;

export const registerListeners = async () =>
  Navigation.events().registerAppLaunchedListener(callback);

const callback = async () =>
  Navigation.setRoot({
    root: {
      stack: {
        options,
        children,
      },
    },
  });

const options = {
  topBar: {
    hidden: true,
  },
};

const children = [
  {
    component: {
      name: SCREENS.HOME,
    },
  },
];
