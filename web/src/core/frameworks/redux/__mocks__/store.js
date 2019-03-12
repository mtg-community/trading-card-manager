import { configureStore, resetStateAction } from '../store';
import { mockReduxAdapter } from './reduxAdapter';
import cloneDeep from 'lodash/cloneDeep';

export const configureTestStore = (
  appSpecificReducers: { [string]: Function } = {},
) => {
  const adapter = cloneDeep(mockReduxAdapter);
  const actionMiddleware = actionRepository();
  const store = configureStore(
    adapter,
    [actionMiddleware],
    appSpecificReducers,
  );

  store.getActions = function() {
    return actionMiddleware.getActions();
  };

  store.reset = function() {
    store.dispatch(resetStateAction());
    actionMiddleware.clearHistory();
  };

  store.adapter = adapter;

  return store;
};

function actionRepository() {
  // We keep this variable in the outer scope to ensure that we won't share same instance when jest run tests parallelly
  let actions = [];
  return function actionHistoryMiddleware(store) {
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
  };
}
