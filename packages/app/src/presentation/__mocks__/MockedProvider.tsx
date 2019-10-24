import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export const MockedProvider = ({ children, store }) => {
  const Screen = () => children;
  const MockedSwitchNavigator = createSwitchNavigator({
    App: {
      screen: Screen,
    },
  });
  const MockedApp = createAppContainer(MockedSwitchNavigator);
  return (
    <Provider store={store}>
      <MockedApp />
    </Provider>
  );
};
