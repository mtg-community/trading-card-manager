// @flow strict

import * as React from 'react';
import { Provider } from 'react-redux';
import type { Store as StoreType } from 'redux';
import { configureStore } from '../../../../domain/frameworks/redux';

let store: StoreType;
type AnyPropsTypes = {};

const getStore = (): StoreType => {
  if (!store) {
    store = configureStore();
  }

  return store;
};

export function withReduxProvider<AnyPropsTypes>(
  Component: React.ComponentType<AnyPropsTypes>,
): () => React.ComponentType<AnyPropsTypes> {
  const wrappedComponent = class extends React.Component<AnyPropsTypes> {
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
