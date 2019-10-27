import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
  NavigationRouteConfig,
} from 'react-navigation';
import { Home } from './screens/Home';

export const Navigator: NavigationContainer = createAppContainer(
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
