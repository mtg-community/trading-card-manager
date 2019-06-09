// @flow strict

import { type NavigationComponentType } from './navigationComponent';

const defaultOptions = {
  topBar: { visible: false, drawBehind: true, height: 0 },
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
