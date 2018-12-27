import React from 'react'
import { connect } from 'react-redux';
import { localeSelector } from '../../domain/redux/ducks/localeReducer';
import { AppComponent } from '../components/App';
import { setUserListenerAction } from 'core';


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

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
