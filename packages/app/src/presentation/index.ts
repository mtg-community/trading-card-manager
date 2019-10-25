import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { Home } from './screens/Home'

export const initializePresentationLayer = () => {
  return createAppContainer(
    createSwitchNavigator({
    Home,
  }, {
    initialRouteName: 'Home',
    backBehavior: 'history',
  }))
}
