import * as React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { IStore } from '../../domain';

type MockedProviderType = {
  children: React.ReactNode,
  store: IStore,
};

export const MockedProvider = ({ children, store }: MockedProviderType) => {
  const MockedSwitchNavigator = createSwitchNavigator({
    App: (): React.ReactNode => children,
  });
  const MockedApp = createAppContainer(MockedSwitchNavigator);
  return (
    <Provider store={store}>
      <MockedApp />
    </Provider>
  );
};
