// @flow strict

import { type NavigationComponentType } from './navigationComponent';

const defaultOptions = {
  topBar: { visible: false, drawBehind: true },
};

export const createStackLayout = (
  children: Array<NavigationComponentType>,
  options: ?{} = defaultOptions,
) => ({
  stack: {
    options,
    children,
  },
});
