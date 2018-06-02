// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from './screens';

const initialScreen = SCREENS.SIGN_IN;

export const registerListeners = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: initialScreen,
        },
      },
    });
  });
};
