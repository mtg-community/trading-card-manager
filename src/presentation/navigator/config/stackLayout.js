// @flow strict

import {
  createReactNavigationComponent,
  type NavigationComponentType,
} from './navigationComponent';

const defaultOptions = {
  topBar: {
    hidden: true,
  },
};

export const createStackLayout = (
  children: Array<NavigationComponentType>,
  options: ?{},
) => ({
  stack: {
    options,
    children,
  },
});
