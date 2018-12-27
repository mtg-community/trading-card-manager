import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from './Router';
import { Provider } from 'react-redux';
import './App.css';
import { identifyUser } from '../data/log-rocket';
import { onAuthStateChanged } from '../data/firebase/authentication';
import { setUserListenerAction, User } from 'core';
import { IntlProvider } from 'react-intl';

export class App extends Component {

  state = {
    locale: this.props.locale
  };

  handleChangeLocale = (locale) => {
    this.setState({locale})
  };

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
    const { store, messages } = this.props;
    const { locale } = this.state;
    console.log(messages[locale]);
    return (
      <Provider store={store}>
        <IntlProvider locale={locale} messages={messages[locale]} >
          <Router handleChangeLocale={this.handleChangeLocale}/>
        </IntlProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

App.displayName = "App";
