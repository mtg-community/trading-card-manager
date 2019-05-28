import { combineReducers, applyMiddleware, createStore, compose, Middleware, Action, Store, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterReducer, userReducer } from './ducks';
import { rootSaga } from './sagas';
import { Adapter } from './reduxAdapter';

const RESET_STATE = 'rootReducer/resetState';
export type Reducer = (state: any, action: any) => any
export const resetStateAction = () => ({ type: RESET_STATE });

type MTGXStore = Store<any, AnyAction>

export const configureStore = (
  adapter: Adapter,
  appSpecificMiddleware: Middleware<any, any, any>[] = [],
  appSpecificReducers: { [key: string]: Reducer } = {},
): MTGXStore => {
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

  const rootReducer = (state: any, action: Action) => {
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
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  sagaMiddleware.run(rootSaga, adapter);
  return store;
};
