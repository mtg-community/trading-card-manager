import React from 'react';
import { MTGStore } from '../domain/DomainLayer';
import { Main } from './Main';

export function initializePresentationLayer(store: MTGStore): React.FC {
  const App: React.FC = () => <Main store={store} />;
  return App;
}
