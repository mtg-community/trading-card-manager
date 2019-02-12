import { selectUser } from 'core/src/frameworks/redux/ducks/userReducer';
import { onAuthStateChanged } from '../data/firebase/authentication';
import { IntlProvider } from 'react-intl';
import { Router } from './Router';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { localeSelector } from '../domain/redux/ducks/localeReducer';
import { whenUserLogsIn, whenUserLogsOut } from '../domain/useCases/user';

const userHasChangedCallback = user => {
  if (user) {
    whenUserLogsIn(user);
  } else {
    whenUserLogsOut();
  }
};

const AppContainer = props => {
  const { messages, locale, user } = props;

  useEffect(
    () => {
      const unSubscriber = onAuthStateChanged(userHasChangedCallback);

      return function componentWillUnmount() {
        return unSubscriber();
      };
    },
    [user],
  );

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
