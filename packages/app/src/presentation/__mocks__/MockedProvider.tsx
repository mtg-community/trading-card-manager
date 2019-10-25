import * as React from 'react';
import { Provider } from 'react-redux';
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationRouteConfig,
} from 'react-navigation';
import { IStore } from '../../domain';

type MockedProviderType = {
  children: React.ReactNode,
  store: IStore,
};

export const MockedProvider = ({ children, store }: MockedProviderType) => {
  const MockedSwitchNavigator = createSwitchNavigator({
    App: (() => children) as NavigationRouteConfig<any, any>,
  });
  const MockedApp = createAppContainer(MockedSwitchNavigator);
  return (
    <Provider store={store}>
      <MockedApp />
    </Provider>
  );
};
