// flow strict

import _ from 'lodash';
import { Navigation } from 'react-native-navigation';
import { SCREENS, type ScreenType } from '../screens';
import { setNavigationRoot } from './listeners';
import { withReduxProvider } from './reduxIntegration';

export const initializeNavigation = async () => {
  registerScreens();
  registerEventListeners();
};

const registerEventListeners = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    setNavigationRoot();
  });
};

const registerScreens = () => {
  const registerScreen = (screen: ScreenType) => {
    const { route, component } = screen;
    Navigation.registerComponent(route, withReduxProvider(component));
  };

  _.forEach(SCREENS, registerScreen);
};
