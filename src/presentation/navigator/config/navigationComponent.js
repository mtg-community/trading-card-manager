// @flow strict

export type NavigationComponentType = {
  component: {
    name: string,
    passProps: ?{},
    options: ?{},
    id: ?string,
  },
};

export const createReactNavigationComponent = (
  name: string,
  passProps: ?{},
  options: ?{},
  id: ?string,
): NavigationComponentType => ({
  component: {
    name,
    options,
    passProps,
    id,
  },
});
