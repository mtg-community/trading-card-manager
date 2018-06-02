// @flow strict

import { createLogger } from 'redux-logger';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { counterReducer } from './ducks/counter';
import { userReducer } from './ducks/user';

const reducers = {
  counter: counterReducer,
  user: userReducer,
};

export const getStore = () => {
  const middleware = [];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return createStore(combineReducers(reducers), applyMiddleware(...middleware));
};
