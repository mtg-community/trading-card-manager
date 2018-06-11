// @flow strict

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { signOut } from '../../../data/firebase/authentication';
import { Navigator } from '../../navigation';
import { SCREENS } from '../../navigation/screens';

import {
  incrementCounter,
  decrementCounter,
  selectCounter,
} from '../../redux/ducks/counter';
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
  counter: number,
  navigator: Navigator,
};

type StatesType = {
  navigator: Navigator,
};

export class HomeContainer extends Component<Props, StatesType> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // $FlowIgnoreNavigationComponentId
      navigator: new Navigator(props.componentId),
    };
  }

  navigateToLogin = () => {
    // $FlowIgnoreNavigationComponentId
    this.state.navigator.navigateTo(SCREENS.SIGN_IN.route, {
      redirectTo: SCREENS.HOME.route,
    });
  };

  render() {
    return (
      <Home
        increment={this.props.increment}
        decrement={this.props.decrement}
        signOut={signOut}
        counter={this.props.counter}
        navigateToLogin={this.navigateToLogin}
        instructions={instructions}
      />
    );
  }
}

const mapStateToProps = state => ({
  counter: selectCounter(state),
});

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
};

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
