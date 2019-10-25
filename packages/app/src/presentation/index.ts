import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
} from 'react-navigation';
import { Home } from './screens/Home';

export const initializePresentationLayer = (): NavigationContainer => {
  return createAppContainer(
    createSwitchNavigator(
      {
        Home,
      },
      {
        initialRouteName: 'Home',
        backBehavior: 'history',
      },
    ),
  );
};
