import { configureStore } from 'redux-starter-kit'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './ducks/userReducer'
import { rootSaga } from './sagas'

export const initializeDomainLayer = () => {
  const reducer = {
    user: userReducer,
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
