import React, { useState } from 'react';
import { loadAsync } from 'expo-font';
import { AppLoading } from 'expo';
import { MTGStore } from '../domain/DomainLayer';
import { Provider } from 'react-redux';
import { Navigator } from './Navigator';

export type MainProps = {
  store: MTGStore;
};

async function loadResourcesAsync(): Promise<void> {
  await loadAsync({
    Mana: require('../../assets/fonts/mana.ttf'),
    Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Thin': require('../../assets/fonts/Roboto-Thin.ttf'),
  });
}

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const { store } = props;
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onFinish={(): void => setLoadingComplete(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
