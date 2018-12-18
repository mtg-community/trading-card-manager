import { configureStore } from 'core';
import React from 'react';
import { Provider } from 'react-redux';
import {Route} from "react-router-dom";
import { InitializeDataLayer } from '../data';
import { InitializeDomainLayer } from '../domain';
import './App.css';
import { Counter } from './containers/Counter';
import { SignIn } from './containers/SignIn';
import {SignUp} from "./containers/SignUp";
import {Private} from "./containers/Private";


InitializeDataLayer();
InitializeDomainLayer();

export function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Route exact path="/" component={Counter} ></Route>
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/private" component={Private}/>
    </Provider>
  );
}
