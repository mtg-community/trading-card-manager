import React from 'react';
import { Router } from './Router';
import { Provider } from 'react-redux';
import './App.css';

export function App(props) {
  return (
    <Provider store={props.store}>
      <Router />
    </Provider>
  );
}
