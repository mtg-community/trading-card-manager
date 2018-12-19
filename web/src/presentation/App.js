import { configureStore } from 'core';
import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { InitializeDataLayer } from '../data';
import { InitializeDomainLayer } from '../domain';
import './App.css';
import { Counter } from './containers/Counter';
import { SignIn } from './containers/SignIn';
import {SignUp} from "./containers/SignUp";
import {Private} from "./components/Private";
import { withAuthentication } from './hocs/withAuthentication';

InitializeDataLayer();
InitializeDomainLayer();

export function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Counter} ></Route>
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/private" component={withAuthentication(Private)}/>
        </Switch>
      </Router>
    </Provider>
  );
}
