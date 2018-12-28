import { updateLoggedInUser } from '../domain/services/monitoring';
import { onAuthStateChanged } from '../data/firebase/authentication';
import { IntlProvider } from 'react-intl';
import { Router } from './Router';
import PropTypes from 'prop-types';
import React,{ Component } from 'react';
import './App.css'
import { connect } from 'react-redux';
import { localeSelector } from '../domain/redux/ducks/localeReducer';
import { User, setUserListenerAction } from 'core';

class AppContainer extends Component {

  unsubscribe = () => {};

  setUser = (user) => {
    let authedUser;

    if (user) {
      authedUser = new User(user.uid, user.email, { emailVerified: user.emailVerified});
    }

    this.props.setUserListener(authedUser);
    updateLoggedInUser(authedUser);
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

const mapStateToProps = state => ({
  locale: localeSelector(state)
});

const mapDispatchToProps = {
  setUserListener : setUserListenerAction
};

AppContainer.propTypes = {
  messages: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  setUserListener: PropTypes.func.isRequired
};

AppContainer.displayName = 'App';

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
