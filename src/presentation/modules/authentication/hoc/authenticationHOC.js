// @flow strict

import * as React from 'react';
import { type User } from 'react-native-firebase';
import { connect } from 'react-redux';
import { onAuthStateChanged } from '../../../../data/firebase/authentication';
import { SCREENS } from '../../../navigation/screens';
import { setUserAction } from '../../../redux/ducks/user';
import { SignInScreen } from '../signInScreen';

type PropsType = {
  children: React.Node,
  setUser: (user: ?User) => void,
};

type StateType = {
  user: ?User,
};

export class AuthenticatedComponent extends React.Component<
  PropsType,
  StateType,
> {
  unsubscriber: ?() => void = null;

  state = {
    user: null,
  };

  componentDidMount() {
    this.unsubscriber = onAuthStateChanged((user: ?User) => {
      this.props.setUser(user);
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  isUserAuthorized = () => this.state.user !== null;

  render() {
    return this.isUserAuthorized() ? (
      this.props.children
    ) : (
      <SignInScreen redirectTo={SCREENS.HOME.route} />
    );
  }
}

const mapDispatchToProps = {
  setUser: setUserAction,
};

export const AuthenticatedHOC = connect(
  null,
  mapDispatchToProps,
)(AuthenticatedComponent);
