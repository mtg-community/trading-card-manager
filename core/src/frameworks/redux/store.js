// @flow strict

import { combineReducers, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { counterReducer } from './ducks/counterReducer';
import { userReducer } from './ducks/userReducer';
import { ReduxAdapter } from './reduxAdapter';
import { rootSaga } from './sagas';

export const configureStore = () => {
  if (!ReduxAdapter.hasBeenInitialized()) {
    throw new Error('Please, make sure you have initialized ReduxAdapter');
  }

  const reducers = {
    counter: counterReducer,
    user: userReducer,
  };

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(...middleware),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
