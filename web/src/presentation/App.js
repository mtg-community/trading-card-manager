import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'core/src/frameworks/redux';
import './App.css';
import { Counter } from './containers/Counter';

export function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
