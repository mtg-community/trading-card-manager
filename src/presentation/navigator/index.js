// @flow strict

import { Navigation } from 'react-native-navigation';
import { createReactNavigationComponent } from './config/navigationComponent';
import { createStackLayout } from './config/stackLayout';

type OpenObjectType = {};

export class Navigator {
  componentId: string;

  constructor(componentId: string) {
    this.componentId = componentId;
  }

  navigateBack = () => {
    Navigation.pop(this.componentId);
  };

  navigateTo = (name: string, passProps: ?OpenObjectType) => {
    Navigation.push(
      this.componentId,
      createReactNavigationComponent(name, passProps),
    );
  };

  dismissModal = () => {
    Navigation.dismissModal(this.componentId);
  };

  static showModal = (
    name: string,
    title: string,
    passProps: ?OpenObjectType,
  ) => {
    const options = {
      topBar: {
        title: {
          text: title,
        },
      },
    };

    Navigation.showModal(
      createStackLayout([
        createReactNavigationComponent(name, passProps, options),
      ]),
    );
  };
}
