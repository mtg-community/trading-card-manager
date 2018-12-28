import React from 'react'
import { connect } from 'react-redux';
import { localeSelector } from '../../domain/redux/ducks/localeReducer';
import { AppComponent } from '../components/App';
import { setUserListenerAction } from 'core';
import PropTypes from 'prop-types';


function AppContainer({ messages, locale, setUserListener}) {
  return(
    <AppComponent messages={messages} locale={locale} setUserListener={setUserListener}/>
  )
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

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
