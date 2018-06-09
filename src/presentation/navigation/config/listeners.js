// @flow strict

import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../screens';

const initialScreen = SCREENS.HOME.route;

export const setNavigationRoot = async () => {
  const options = {
    topBar: {
      hidden: true,
    },
  };

  const children = [
    {
      component: {
        name: initialScreen,
      },
    },
  ];

  Navigation.setRoot({
    root: {
      stack: {
        options,
        children,
      },
    },
  });
};
