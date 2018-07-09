// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../../screens';
import { createReactNavigationComponent } from './navigationComponent';
import { createStackLayout } from './stackLayout';

const initialScreen = SCREENS.HOME.route;

export const setNavigationRoot = async () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: createReactNavigationComponent(SCREENS.HOME.route),
        right: createReactNavigationComponent(SCREENS.HOME.route),
        center: createStackLayout([
          createReactNavigationComponent(initialScreen),
        ]),
      },
    },
  });
};
