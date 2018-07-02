// @flow strict

import { type User } from 'react-native-firebase';
import { connect } from 'react-redux';
import { branch, renderComponent, compose, lifecycle } from 'recompose';
import { Logger } from '../../../../data/logger';
import { onAuthStateChanged } from '../../../../data/firebase/authentication';
import { setUserListenerAction } from '../../../../domain/redux/ducks/user';
import { SignInScreen } from '../../authentication/signInScreen';

const SET_USER_ACTION = 'userListener';

const isUnauthorized = props => {
  return props.user === null;
};

const renderSignInIfNotAuthorized = branch(
  isUnauthorized,
  renderComponent(SignInScreen),
);

export const withAuthListener = lifecycle({
  state: { unsubscriber: null, user: null },
  componentDidMount() {
    const unsubscriber = onAuthStateChanged((user: ?User) => {
      Logger.log(`User state has changed: `, user);
      if (this.props[SET_USER_ACTION]) {
        this.props[SET_USER_ACTION](user);
      }
      this.setState({ unsubscriber, user });
    });
  },
  componentWillUnmount() {
    if (this.state.unsubscriber) {
      this.state.unsubscriber();
    }
  },
});

const withReduxConnected = connect(
  null,
  {
    [SET_USER_ACTION]: setUserListenerAction,
  },
);

export const authStateListener = compose(
  withReduxConnected,
  withAuthListener,
);

export const withAuthentication = compose(
  withAuthListener,
  renderSignInIfNotAuthorized,
);
