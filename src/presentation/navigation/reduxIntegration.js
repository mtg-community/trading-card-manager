// @flow strict

import * as React from 'react';
import { Provider } from 'react-redux';
import type { Store as StoreType } from 'redux';

export function decorateWithProvider<Props: {}>(
  Component: React.ComponentType<Props>,
  Store: StoreType,
): () => React.ComponentType<Props> {
  const wrappedComponent = class Scene extends React.Component<*> {
    render() {
      return (
        <Provider store={Store}>
          <Component {...this.props} />
        </Provider>
      );
    }
  };

  return () => wrappedComponent;
}
