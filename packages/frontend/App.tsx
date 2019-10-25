import React from 'react'
import { Provider} from 'react-redux'
import { initializeDomainLayer } from './src/domain'
import { initializeDataLayer } from './src/data'
import { initializePresentationLayer } from './src/presentation'

initializeDataLayer()
const store = initializeDomainLayer()
const Navigator = initializePresentationLayer()

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
