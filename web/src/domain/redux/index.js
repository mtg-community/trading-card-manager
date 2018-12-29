import { configureStore } from 'core';
import { logRocketMiddleware } from '../../data/log-rocket';
import { isProduction } from '../services/environment';
import locale from './ducks/localeReducer';

let store = {}

export const createStore = reduxAdapter => {
  const middleware = [];

  if (isProduction()) {
    middleware.push(logRocketMiddleware());
  }

  store = configureStore(reduxAdapter, middleware, { locale });

  return store;
};

export const dispatch = action => store.dispatch(action);

export const select = selector => selector(store.getState());
