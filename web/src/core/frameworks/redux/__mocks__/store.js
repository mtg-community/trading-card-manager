import { ReduxAdapter } from '../reduxAdapter';
import { configureStore } from '../store';
import { mockReduxAdapter } from './reduxAdapter';
import memoize from 'lodash/memoize';
import cloneDeep from 'lodash/cloneDeep';

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
  return cloneDeep(store);
};
