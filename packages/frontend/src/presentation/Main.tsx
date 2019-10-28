import React from 'react';
import { MTGStore } from '../domain';
import { FallBackView } from './components/FallBackView';
import { Provider } from 'react-redux';
import { Navigator } from './Navigator';
import { ErrorReporter } from '../domain/ErrorReporter';

type MainProps = {
  store: MTGStore;
};

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const { store } = props;
  const ErrorBoundary = ErrorReporter.ErrorBoundary;

  return (
    <ErrorBoundary FallbackComponent={FallBackView}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </ErrorBoundary>
  );
};
