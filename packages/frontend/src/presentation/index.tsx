import React from 'react';
import { MTGStore } from '../domain';
import { Main } from './Main';

export function initializePresentationLayer(store: MTGStore): React.FC {
  return function App() {
    return (
      <Main store={store} />
    );
  }
}
