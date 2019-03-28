// @flow strict

import * as React from 'react';
import { Provider } from 'react-redux';
import { getStore } from 'domain';

export function withReduxProvider<Props: {}>(
  Component: React.ComponentType<Props>,
): () => React.ComponentType<Props> {
  const wrappedComponent = class extends React.Component<Props> {
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
