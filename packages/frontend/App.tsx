import React from 'react'
import { Provider } from 'react-redux'
import { initializeDomainLayer } from './src/domain'
import { initializeDataLayer } from './src/data'
import { initializePresentationLayer } from './src/presentation'
import { FallBackView } from './src/presentation/components/FallBackView';
import { ErrorBoundary } from './src/data/bugsnag';

initializeDataLayer()
const store = initializeDomainLayer()
const Navigator = initializePresentationLayer()

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={FallBackView}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </ErrorBoundary>
  );
}
