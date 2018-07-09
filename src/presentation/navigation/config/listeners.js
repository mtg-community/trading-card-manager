// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../screens';

const initialScreen = SCREENS.HOME.route;

const createReactNavigationComponent = (
  name: string,
  options: ?{},
  passProps: ?{},
  id: ?string,
) => ({
  component: {
    name,
    options,
    passProps,
    id,
  },
});

const createStackLayout = (initialScreen: string) => ({
  stack: {
    options: {
      topBar: {
        hidden: true,
      },
    },
    children: [createReactNavigationComponent(initialScreen)],
  },
});

export const setNavigationRoot = async () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: createReactNavigationComponent(SCREENS.HOME.route),
        right: createReactNavigationComponent(SCREENS.HOME.route),
        center: createStackLayout(initialScreen),
      },
    },
  });
};
