import { configureStore, EnhancedStore } from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import {
  AuthActionsType,
  authenticationReducer,
  AuthenticationState,
} from './ducks/authenticationReducer';
import { rootSaga } from './sagas';
import { ReducersMapObject } from 'redux';

export interface MTGState {
  readonly authentication: AuthenticationState;
}
export type MTGActions = AuthActionsType;
export type MTGStore = EnhancedStore<MTGState, MTGActions>;
const rootReducer: ReducersMapObject<MTGState, MTGActions> = {
  authentication: authenticationReducer,
};

export const initializeDomainLayer = (): MTGStore => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
