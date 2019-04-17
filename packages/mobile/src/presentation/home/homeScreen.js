// @flow strict

import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
  counterSelector,
  decrementCounterAction,
  incrementCounterAction,
} from 'core';
import { User } from 'core';
import { Navigator } from '../shared/navigation';
import { SCREENS } from '../shared/navigation/screens';
import SQLite from 'react-native-sqlite-storage';
import { logOutAction, selectUser } from 'core';
import { connectReduxAndNavigator } from '../shared/navigation/hoc/screenHOC';
import { Home } from './dumb/home';
import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
  decrement: () => void,
  increment: () => void,
  logOut: () => void,
  counter: number,
  navigator: Navigator,
  user: ?User,
};

export class HomeContainer extends Component<Props> {
  async componentDidMount() {
    SplashScreen.hide();
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);
    const db = await SQLite.openDatabase(
      {
        name: 'WoS',
        readOnly: true,
        location: 'default',
      },
      () => console.log('Conseguiu ler o db'),
      () => console.log('Não conseguiu ler o db'),
    );
    console.log('War of the Spark database', db);
  }

  navigateToLogin = () => {
    this.props.navigator.navigateTo(SCREENS.SIGN_IN.route, {
      redirectTo: SCREENS.HOME.route,
    });
  };

  render() {
    return (
      <Home
        increment={this.props.increment}
        decrement={this.props.decrement}
        logOut={this.props.logOut}
        counter={this.props.counter}
        navigateToLogin={this.navigateToLogin}
        instructions={instructions}
        isLoggedIn={!!this.props.user}
      />
    );
  }
}

const mapStateToProps = state => ({
  counter: counterSelector(state),
  user: selectUser(state),
});

const mapDispatchToProps = {
  increment: incrementCounterAction,
  decrement: decrementCounterAction,
  logOut: logOutAction,
};

export const HomeScreen = connectReduxAndNavigator(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
