// @flow strict

import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { counterReducer } from './ducks/counterReducer';
import { userReducer } from './ducks/userReducer';
import { ReduxAdapter } from './reduxAdapter';
import { rootSaga } from './sagas';

export let reduxAdapter = {};

export const configureStore = (
  adapter,
  appSpecificReducers = {},
  appSpecificMiddleware = [],
) => {
  if (adapter instanceof ReduxAdapter) {
    reduxAdapter = adapter;
  } else {
    throw new Error('ReduxAdapter is required.');
  }

  const sharedReducers = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducers = {
    ...sharedReducers,
    ...appSpecificReducers,
  };

  const sagaMiddleware = createSagaMiddleware();
  const sharedMiddleware = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    sharedMiddleware.push(createLogger());
  }

  const middleware = [...sharedMiddleware, ...appSpecificMiddleware];

  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(...middleware),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
