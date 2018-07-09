// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../screens';
import { createReactNavigationComponent } from './config/navigationComponent';
import { createStackLayout } from './config/stackLayout';
import { CENTER_COMPONENT_ID, LEFT_DRAWER_ID, RIGHT_DRAWER_ID } from './index';

const INITIAL_SCREEN = SCREENS.HOME.route;

export const setNavigationRoot = async () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: createReactNavigationComponent(
          SCREENS.LEFT_MENU.route,
          undefined,
          undefined,
          LEFT_DRAWER_ID,
        ),
        right: createReactNavigationComponent(
          SCREENS.RIGHT_MENU.route,
          undefined,
          undefined,
          RIGHT_DRAWER_ID,
        ),
        center: createStackLayout([
          createReactNavigationComponent(
            INITIAL_SCREEN,
            undefined,
            undefined,
            CENTER_COMPONENT_ID,
          ),
        ]),
      },
    },
  });
};
