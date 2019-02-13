import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { selectUser } from 'core';

import { onAuthStateChanged } from '../data/firebase/authentication';
import { Router } from './Router';
import { localeSelector } from '../domain/redux/ducks/localeReducer';
import { whenUserLogsIn, whenUserLogsOut } from '../domain/useCases/user';

import './App.css';

const userHasChangedCallback = user => {
  if (user) {
    whenUserLogsIn(user);
  } else {
    whenUserLogsOut();
  }
};

const AppContainer = props => {
  const { messages, locale, user } = props;

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(userHasChangedCallback);

    return function componentWillUnmount() {
      return unSubscriber();
    };
  }, [user]);

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
  user: PropTypes.object.isRequired,
};

AppContainer.displayName = 'App';

export const App = connect(mapStateToProps)(AppContainer);
