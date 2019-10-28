import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
  NavigationRouteConfig,
} from 'react-navigation';
import { Welcome } from './screens/Welcome';
import { Home } from './screens/Home';

export const Navigator: NavigationContainer = createAppContainer(
  createSwitchNavigator(
    {
      Welcome: Welcome as NavigationRouteConfig<unknown, unknown>,
      Home: Home as NavigationRouteConfig<unknown, unknown>,
    },
    {
      initialRouteName: 'Welcome',
      backBehavior: 'history',
    },
  ),
);
