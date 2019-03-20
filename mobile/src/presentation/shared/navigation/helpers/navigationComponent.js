// @flow strict

export type NavigationComponentType = {
  component: {
    name: string,
    passProps: ?{},
    options: ?{},
    id: ?string,
  },
};

const defaultOptions = {
  topBar: { visible: true, drawBehind: true },
  sideMenu: {
    right: {
      visible: false,
      enabled: false,
    },
  },
};

export const createReactNavigationComponent = (
  name: string,
  passProps: ?{},
  options: ?{} = defaultOptions,
  id: ?string,
): NavigationComponentType => ({
  component: {
    name,
    options,
    passProps,
    id,
  },
});
