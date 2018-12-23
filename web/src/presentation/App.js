import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from './Router';
import { Provider } from 'react-redux';
import './App.css';
import { onAuthStateChanged } from '../data/firebase/authentication';
import { setUserListenerAction, User } from 'core';

export class App extends Component {

  unsubscribe = () => {};

  setUser = ({email, emailVerified}) => {
    const authedUser = new User(email, emailVerified);
    this.props.store.dispatch(setUserListenerAction(authedUser));
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
