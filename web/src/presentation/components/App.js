import { User } from 'core';
import { identifyUser } from '../../data/log-rocket';
import { onAuthStateChanged } from '../../data/firebase/authentication';
import { IntlProvider } from 'react-intl';
import { Router } from '../Router';
import PropTypes from 'prop-types';
import React,{ Component } from 'react';
import './styles/App.css'

export class AppComponent extends Component {

  unsubscribe = () => {};

  setUser = (user) => {
    let authedUser;

    if (user) {
      authedUser = new User(user.uid, user.email, { emailVerified: user.emailVerified});
    }

    this.props.setUserListener(authedUser);
    identifyUser(authedUser);
  };

  componentDidMount() {
    this.unsubscribe = onAuthStateChanged(this.setUser)
  }

  render() {
    const { messages, locale } = this.props;

    return (
      <IntlProvider key={locale} locale={locale} messages={messages[locale]} >
        <Router />
      </IntlProvider>
    );
  }
}

AppComponent.propTypes = {
  messages: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  setUserListener: PropTypes.func.isRequired
};

AppComponent.displayName = 'App';
