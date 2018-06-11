// @flow strict

import * as React from 'react';
import { type User } from 'react-native-firebase';
import { onAuthStateChanged } from '../../../../data/firebase/authentication';
import { SCREENS } from '../../../navigation/screens';
import { SignInScreen } from '../../authentication/signInScreen';

type OpenPropsType = {};
type PropsType = {
  children: React.Node,
};
type StateType = {
  user: ?User,
};

export const authenticated = (
  BaseComponent: React.ComponentType<OpenPropsType>,
) => (props: OpenPropsType) => (
  <AuthenticatedComponent>
    <BaseComponent {...props} />
  </AuthenticatedComponent>
);

class AuthenticatedComponent extends React.Component<PropsType, StateType> {
  unsubscriber: ?() => void = null;
  state = { user: null };

  isUserAuthorized = () => this.state.user !== null;

  componentDidMount() {
    this.unsubscriber = onAuthStateChanged((user: ?User) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    return this.isUserAuthorized() ? (
      this.props.children
    ) : (
      <SignInScreen redirectTo={SCREENS.HOME.route} />
    );
  }
}
