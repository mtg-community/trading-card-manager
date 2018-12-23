import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from './Router';
import { Provider } from 'react-redux';
import './App.css';
import { identifyUser } from '../data/log-rocket';
import { onAuthStateChanged } from '../data/firebase/authentication';
import { setUserListenerAction, User } from 'core';

export class App extends Component {

  unsubscribe = () => {};

  setUser = (user) => {
    const authedUser = new User(user.uid, user.email, { emailVerified: user.emailVerified});
    this.props.store.dispatch(setUserListenerAction(authedUser));
    identifyUser(authedUser);
  };

  componentDidMount() {
    this.unsubscribe = onAuthStateChanged(this.setUser)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

App.displayName = "App";
