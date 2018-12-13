import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from 'core';
import './App.css';
import { InitializeDomainLayer } from '../domain';
import { Counter } from './containers/Counter';
import { SignIn } from './containers/SignIn';
import { initializeFirebase } from '../config/firebase';

initializeFirebase();
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
