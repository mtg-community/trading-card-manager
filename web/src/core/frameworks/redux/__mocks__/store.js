import { ReduxAdapter } from '../reduxAdapter';
import { configureStore, resetStateAction } from '../store';
import { mockReduxAdapter } from './reduxAdapter';
import memoize from 'lodash/memoize';

const memoizedConfigureStore = memoize(configureStore);

export const configureTestStore = (
  adapter: ReduxAdapter,
  appSpecificMiddleware: Array<Function> = [],
  appSpecificReducers: { [string]: Function } = {},
) => {
  const store = configureStore(
    mockReduxAdapter,
    [actionHistoryMiddleware],
    appSpecificReducers,
  );

  store.getActions = function() {
    return StoreHistory.actions;
  };

  store.reset = function() {
    store.dispatch(resetStateAction());
    StoreHistory.clearHistory();
  };

  store.adapter = mockReduxAdapter;

  return store;
};

class StoreHistory {
  static actions = [];

  static record(action) {
    this.actions.push(action);
  }

  static clearHistory() {
    this.actions = [];
  }
}

function actionHistoryMiddleware(store) {
  return next => action => {
    StoreHistory.record(action);
    return next(action);
  };
}
