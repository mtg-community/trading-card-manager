// @flow strict

import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterReducer } from './ducks/counterReducer';
import { userReducer } from './ducks/userReducer';
import { ReduxAdapter } from './reduxAdapter';
import { rootSaga } from './sagas';

const RESET_STATE = 'rootReducer/resetState';
export const resetStateAction = () => ({ type: RESET_STATE });

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

  const reducers = combineReducers({
    ...sharedReducers,
    ...appSpecificReducers,
  });

  const rootReducer = (state, action) => {
    if (action.type === RESET_STATE) {
      // https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992
      return reducers(undefined, action);
    }

    return reducers(state, action);
  };

  const sagaMiddleware = createSagaMiddleware();
  const sharedMiddleware = [sagaMiddleware];

  const middleware = [...sharedMiddleware, ...appSpecificMiddleware];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga, adapter);
  return store;
};
