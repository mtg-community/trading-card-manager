import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from 'core/src/frameworks/redux';
import { InitializeDomainLayer } from '../domain';

InitializeDomainLayer();

export const App = () => {
  return (
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
};
