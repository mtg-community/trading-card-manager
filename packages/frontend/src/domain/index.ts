import {
  Action,
  configureStore,
  EnhancedStore,
  PayloadAction,
} from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import {
  authenticationReducer,
  AuthenticationState,
} from './ducks/authenticationReducer';
import { rootSaga } from './sagas';

export interface State {
  authentication: AuthenticationState;
}

export type IStore = EnhancedStore<State, Action | PayloadAction>;

export const initializeDomainLayer = (): IStore => {
  const reducer = {
    authentication: authenticationReducer,
  };
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = configureStore({
    reducer,
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};