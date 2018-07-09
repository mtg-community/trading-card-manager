// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../screens';
import { createReactNavigationComponent } from './config/navigationComponent';
import { createStackLayout } from './config/stackLayout';

const initialScreen = SCREENS.HOME.route;

export const setNavigationRoot = async () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: createReactNavigationComponent(SCREENS.LEFT_MENU.route),
        right: createReactNavigationComponent(SCREENS.LEFT_MENU.route),
        center: createStackLayout([
          createReactNavigationComponent(initialScreen),
        ]),
      },
    },
  });
};
