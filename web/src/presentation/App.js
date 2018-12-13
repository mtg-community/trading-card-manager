import { configureStore } from 'core';
import React from 'react';
import { Provider } from 'react-redux';
import { InitializeDataLayer } from '../data';
import { InitializeDomainLayer } from '../domain';
import './App.css';
import { Counter } from './containers/Counter';
import { SignIn } from './containers/SignIn';

InitializeDataLayer();
InitializeDomainLayer();

export function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Counter />
      <SignIn />
    </Provider>
  );
}
