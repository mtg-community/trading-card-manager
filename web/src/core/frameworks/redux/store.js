// @flow strict

import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterReducer } from './ducks/counterReducer';
import { userReducer } from './ducks/userReducer';
import { ReduxAdapter } from './reduxAdapter';
import { rootSaga } from './sagas';

export const configureStore = (
  adapter: ReduxAdapter,
  appSpecificMiddleware: Array<Function> = [],
  appSpecificReducers: { [string]: Function } = {},
) => {
  if (!adapter.hasBeenInitialized()) {
    throw new Error('ReduxAdapter is required.');
  }

  const sharedReducers = {
    counter: counterReducer(adapter.counter),
    user: userReducer,
  };

  const reducers = {
    ...sharedReducers,
    ...appSpecificReducers,
  };

  const sagaMiddleware = createSagaMiddleware();
  const sharedMiddleware = [sagaMiddleware];

  const middleware = [...sharedMiddleware, ...appSpecificMiddleware];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers(reducers),
    composeEnhancers(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga, adapter);
  return store;
};
