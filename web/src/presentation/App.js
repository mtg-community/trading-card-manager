import React from 'react';
import PropTypes from 'prop-types';
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

App.propTypes = {
  store: PropTypes.object.isRequired,
};

App.displayName = "App";
