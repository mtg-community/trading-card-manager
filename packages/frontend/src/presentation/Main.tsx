import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { MTGStore } from '../domain/DomainLayer';
import { FallBackView } from './components/FallBackView';
import { Provider } from 'react-redux';
import { Navigator } from './Navigator';
import { ErrorReporter } from '../domain/ErrorReporter';
import { StatusBar } from 'react-native';

export type MainProps = {
  store: MTGStore;
};

async function startAsync(): Promise<void> {
  await Font.loadAsync({
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    'Mana-Font': require('../../assets/fonts/mana.ttf'),
  });
  await FileSystem.downloadAsync(
    'https://www.mtgjson.com/files/AllPrintings.sqlite',
    `${FileSystem.documentDirectory}/SQLite` + 'AllPrintings.sqlite',
  );
  const db = SQLite.openDatabase('AllPrintings.sqlite');
  console.log(db)
}

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const { store } = props;
  const ErrorBoundary = ErrorReporter.ErrorBoundary;

  if (!isReady) {
    return (
      <AppLoading
        startAsync={startAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <ErrorBoundary FallbackComponent={FallBackView}>
      <Provider store={store}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <Navigator />
      </Provider>
    </ErrorBoundary>
  );
};
