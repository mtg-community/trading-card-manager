import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { selectUser, User } from 'core';

import { onAuthStateChanged } from '../data/firebase/authentication';
import { Router } from './Router';
import { localeSelector } from '../domain/redux/ducks/localeReducer';
import { authStateHasChanged } from '../domain/useCases/user';

import './App.css';

const AppContainer = props => {
  const { messages, locale } = props;

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(authStateHasChanged);

    return () => {
      unSubscriber();
    };
  }, []);

  return (
    <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
      <Router />
    </IntlProvider>
  );
};

const mapStateToProps = state => ({
  locale: localeSelector(state),
  user: selectUser(state),
});

AppContainer.propTypes = {
  messages: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  user: PropTypes.PropTypes.instanceOf(User),
};

AppContainer.displayName = 'App';

export const App = connect(mapStateToProps)(AppContainer);
