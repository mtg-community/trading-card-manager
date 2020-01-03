import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  AuthActionsType,
  authenticationReducer,
  AuthenticationState,
} from './ducks/authenticationReducer';
import { rootSaga } from './sagas';
import { ReducersMapObject } from 'redux';
import { BugSnag } from '../data/bugsnag';
import { ErrorReporter } from './ErrorReporter';
import {
  CardListActionsType,
  cardListReducer,
  CardListState,
} from './ducks/cardListReducer';

export interface MTGState {
  readonly authentication: AuthenticationState;
  readonly cardList: CardListState;
}
export type MTGActions = AuthActionsType & CardListActionsType;
export type MTGStore = EnhancedStore<MTGState, MTGActions>;
const rootReducer: ReducersMapObject<MTGState, MTGActions> = {
  authentication: authenticationReducer,
  cardList: cardListReducer,
};

export const initializeDomainLayer = (bugSnag?: BugSnag): MTGStore => {
  if (bugSnag) {
    ErrorReporter.init(bugSnag);
  }

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
