import { ReduxAdapter } from '../reduxAdapter';
import { configureStore } from '../store';
import { mockReduxAdapter } from './reduxAdapter';
import memoize from 'lodash/memoize';

const memoizedConfigureStore = memoize(configureStore);

export const configureTestStore = (
  adapter: ReduxAdapter,
  appSpecificMiddleware: Array<Function> = [],
  appSpecificReducers: { [string]: Function } = {},
) => {
  return memoizedConfigureStore(
    mockReduxAdapter,
    appSpecificMiddleware,
    appSpecificReducers,
  );
};
