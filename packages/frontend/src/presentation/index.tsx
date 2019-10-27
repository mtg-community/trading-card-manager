import React from 'react';
import { MTGStore } from '../domain';
import { Main } from './Main';

export function initializePresentationLayer(
  store: MTGStore,
  ErrorBoundary: React.ReactType,
): () => React.ReactNode {
  return function App(): React.ReactNode {
    return <Main store={store} ErrorBoundary={ErrorBoundary} />;
  };
}
