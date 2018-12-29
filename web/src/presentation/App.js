import { onAuthStateChanged } from '../data/firebase/authentication';
import { IntlProvider } from 'react-intl';
import { Router } from './Router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { localeSelector } from '../domain/redux/ducks/localeReducer';
import { whenUserLogsIn, whenUserLogsOut } from '../domain/useCases/user';

class AppContainer extends Component {
  unsubscribe = () => {};

  userHasChangedCallback = user => {
    if (user) {
      whenUserLogsIn(user);
    } else {
      whenUserLogsOut();
    }
  };

  componentDidMount() {
    this.unsubscribe = onAuthStateChanged(this.userHasChangedCallback);
  }

  render() {
    const { messages, locale } = this.props;

    return (
      <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
        <Router />
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  locale: localeSelector(state),
});

AppContainer.propTypes = {
  messages: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
};

AppContainer.displayName = 'App';

export const App = connect(mapStateToProps)(AppContainer);
