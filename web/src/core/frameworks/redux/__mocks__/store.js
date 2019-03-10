import { ReduxAdapter } from '../reduxAdapter';
import { configureStore, resetStateAction } from '../store';
import { mockReduxAdapter } from './reduxAdapter';

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
    return actionHistoryMiddleware.getActions();
  };

  store.reset = function() {
    store.dispatch(resetStateAction());
    actionHistoryMiddleware.clearHistory();
  };

  store.adapter = mockReduxAdapter;

  return store;
};

function actionHistoryMiddleware(store) {
  let actions = [];

  actionHistoryMiddleware.clearHistory = function() {
    actions = [];
  };

  actionHistoryMiddleware.getActions = function() {
    return actions;
  };

  return next => action => {
    actions.push(action);
    return next(action);
  };
}
