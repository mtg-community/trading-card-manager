// @flow strict

import React, { Component } from 'react';
import { Platform } from 'react-native';
import type { User } from 'react-native-firebase';
import { Navigator } from '../../navigation';
import { SCREENS } from '../../navigation/screens';

import {
  incrementCounter,
  decrementCounter,
  selectCounter,
} from '../../../domain/redux/ducks/counter';
import { logOutAction, selectUser } from '../../../domain/redux/ducks/user';
import { connectReduxAndNavigator } from '../shared/hoc/screenHOC';
import { Home } from './presentational/home';

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
  navigateToLogin = () => {
    // $FlowIgnoreNavigationComponentId
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
  counter: selectCounter(state),
  user: selectUser(state),
});

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
  logOut: logOutAction,
};

export const HomeScreen = connectReduxAndNavigator(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
