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
  const store = memoizedConfigureStore(
    mockReduxAdapter,
    appSpecificMiddleware,
    appSpecificReducers,
  );

  if (!store.actions) {
    const dispatchRef = store.dispatch;

    store.actions = [];
    store.getActions = () => store.actions;
    store.clearActions = () => {
      store.actions = [];
    };

    store.dispatch = action => {
      store.actions.push(action);
      dispatchRef(action);
    };

    store.reset = () => {
      store.dispatch(resetStateAction());
      store.clearActions();
    };
  }

  return store;
};
