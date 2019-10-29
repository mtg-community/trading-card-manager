import {
  createAppContainer,
  createSwitchNavigator,
  NavigationContainer,
} from 'react-navigation';
import { Welcome } from './screens/Welcome';
import { Home } from './screens/Home';
import { CardSearchFilter } from './screens/CardSearchFilter/CardSearchFilter';

export const Navigator: NavigationContainer = createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Home,
      CardSearchFilter,
    },
    {
      initialRouteName: 'CardSearchFilter',
      backBehavior: 'history',
    },
  ),
);
