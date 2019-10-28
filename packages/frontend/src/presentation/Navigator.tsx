import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
} from 'react-navigation';
import { Welcome } from './screens/Welcome';
import { Home } from './screens/Home';

export const Navigator: NavigationContainer = createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Home,
    },
    {
      initialRouteName: 'Welcome',
      backBehavior: 'history',
    },
  ),
);
