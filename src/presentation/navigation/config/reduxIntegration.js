// @flow strict

import * as React from 'react';
import { Provider } from 'react-redux';
import type { Store as StoreType } from 'redux';
import { configureStore } from '../../../domain/redux';

let store: StoreType;

const getStore = (): StoreType => {
  if (!store) {
    store = configureStore();
  }

  return store;
};

export function withReduxProvider<Props: {}>(
  Component: React.ComponentType<Props>,
): () => React.ComponentType<Props> {
  const wrappedComponent = class extends React.Component<*> {
    render() {
      return (
        <Provider store={getStore()}>
          <Component {...this.props} />
        </Provider>
      );
    }
  };

  return () => wrappedComponent;
}