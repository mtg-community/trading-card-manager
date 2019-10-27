import React, { ReactType } from 'react';
import { MTGStore } from '../domain';
import { FallBackView } from './components/FallBackView';
import { Provider } from 'react-redux';
import { Navigator } from './Navigator';

type MainProps = {
  store: MTGStore;
  ErrorBoundary: ReactType;
};

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const { store, ErrorBoundary } = props;
  return (
    <ErrorBoundary FallbackComponent={FallBackView}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </ErrorBoundary>
  );
};
