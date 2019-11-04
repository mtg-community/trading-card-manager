import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { MTGStore } from '../domain/DomainLayer';
import { FallBackView } from './components/FallBackView';
import { Provider } from 'react-redux';
import { Navigator } from './Navigator';
import { ErrorReporter } from '../domain/ErrorReporter';

export type MainProps = {
  store: MTGStore;
};

async function loadResourcesAsync(): Promise<void> {
  await Font.loadAsync({
    Mana: require('../../assets/fonts/mana.ttf'),
  });
}

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const { store } = props;
  const ErrorBoundary = ErrorReporter.ErrorBoundary;
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onFinish={() => setLoadingComplete(true)}
      />
    );
  }

  return (
    <ErrorBoundary FallbackComponent={FallBackView}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </ErrorBoundary>
  );
};
