// @flow strict

import All, { Navigation } from 'react-native-navigation';

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

  dismissModal = () => {
    Navigation.dismissModal(this.componentId);
  };
}

export const navigateTo = (
  name: string,
  componentId: string,
  passProps: ?OpenObjectType,
) => {
  Navigation.push(componentId, createComponent(name, passProps));
};

export const pop = (componentId: string) => {
  Navigation.pop(componentId);
};

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
