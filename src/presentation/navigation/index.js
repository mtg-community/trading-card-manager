// @flow strict

import { Navigation } from 'react-native-navigation';

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
    Navigation.push(this.componentId, createComponent(name, passProps));
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

    Navigation.showModal({
      stack: {
        children: [createComponent(name, passProps, options)],
      },
    });
  };
}

const createComponent = (
  name: string,
  passProps: ?OpenObjectType = {},
  options: ?OpenObjectType = {},
) => {
  return {
    component: {
      name,
      passProps,
      options,
    },
  };
};
