import * as React from 'react';
import { Provider } from 'react-redux';
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationRouteConfig,
} from 'react-navigation';
import { MTGStore } from '../../domain';

type MockedProviderType = {
  children: React.ReactNode;
  store: MTGStore;
};

export const MockedProvider: React.FC<MockedProviderType> = ({
  children,
  store,
}) => {
  const MockedSwitchNavigator = createSwitchNavigator({
    App: (() => children) as NavigationRouteConfig<unknown, unknown>,
  });
  const MockedApp = createAppContainer(MockedSwitchNavigator);
  return (
    <Provider store={store}>
      <MockedApp />
    </Provider>
  );
};
