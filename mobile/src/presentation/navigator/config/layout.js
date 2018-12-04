// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS, INITIAL_SCREEN } from 'presentation/screens';
import { createReactNavigationComponent } from '../helpers/navigationComponent';
import { createStackLayout } from '../helpers/stackLayout';
import { CENTER_COMPONENT_ID, LEFT_DRAWER_ID, RIGHT_DRAWER_ID } from '..';

export const setAppLayout = async () => {
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
