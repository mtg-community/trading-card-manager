import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../core/frameworks/redux';
import './App.css';
import { InitializeDomainLayer } from '../domain';
import { Counter } from './containers/Counter';

InitializeDomainLayer();

export function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
