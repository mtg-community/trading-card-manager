import { AnyAction, configureStore, EnhancedStore } from 'redux-starter-kit'
import createSagaMiddleware from 'redux-saga'
import {
  authenticationReducer,
  AuthenticationState
} from './ducks/authenticationReducer'
import { rootSaga } from './sagas'

export interface Store {
  authentication: AuthenticationState
}

export const initializeDomainLayer = (): EnhancedStore<any, AnyAction> => {
  const reducer = {
    authentication: authenticationReducer,
  }
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]
  const store = configureStore({
    reducer,
    middleware,
  })

  sagaMiddleware.run(rootSaga)

  return store
}
