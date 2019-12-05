import React from 'react';
import { MTGStore } from '../domain/DomainLayer';
import { Main } from './Main';
import { initializeInternalization } from './internalization';

export function initializePresentationLayer(store: MTGStore): React.FC {
  initializeInternalization();
  const App: React.FC = () => <Main store={store} />;
  return App;
}
