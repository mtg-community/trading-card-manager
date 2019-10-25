import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
  NavigationRouteConfig,
} from 'react-navigation';
import { Home } from './screens/Home';

export const initializePresentationLayer = (): NavigationContainer => {
  return createAppContainer(
    createSwitchNavigator(
      {
        Home: Home as NavigationRouteConfig<unknown, unknown>,
      },
      {
        initialRouteName: 'Home',
        backBehavior: 'history',
      },
    ),
  );
};
