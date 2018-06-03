// @flow strict

import { Navigation } from 'react-native-navigation';
import { registerListeners } from './listeners';
import { registerScreens, SCREENS } from './screens';

export const initializeNavigation = () => {
  registerScreens();
  registerListeners();
};

export const navigateTo = (
  name: string,
  componentId: string,
  passProps: {} = {},
) => {
  const navParams = {
    component: {
      name,
      passProps,
    },
  };

  Navigation.push(componentId, navParams);
};

export const dismissModal = (componentId: string) => {
  Navigation.dismissModal(componentId);
};

export const showModal = (name: string, title: string, passProps: {} = {}) => {
  const options = {
    topBar: {
      title: {
        text: title,
      },
    },
  };

  const component = {
    component: {
      name,
      passProps,
      options,
    },
  };

  Navigation.showModal({
    stack: {
      children: [component],
    },
  });
};

export const pop = (componentId: string) => {
  Navigation.pop(componentId);
};
