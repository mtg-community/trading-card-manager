// @flow strict

import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { Logger } from '../../../../data/logger';
import { setUserListenerAction } from '../../../redux/ducks/user';
import { onAuthStateChanged } from '../../../../data/firebase/authentication';

const listenerAction = 'userListener';

const setUpLifeCycleListener = lifecycle({
  state: { unsubscriber: null },
  componentDidMount() {
    const unsubscriber = onAuthStateChanged((user: ?User) => {
      Logger.log(`User state has changed: `, user);
      if (this.props[listenerAction]) {
        this.props[listenerAction](user);
      }
    });
    this.setState({ unsubscriber: false });
  },
  componentWillUnmount() {
    if (this.state.unsubscriber) {
      this.state.unsubscriber();
    }
  },
});

const connectWithRedux = connect(
  null,
  {
    [listenerAction]: setUserListenerAction,
  },
);

export const authStateListener = compose(
  connectWithRedux,
  setUpLifeCycleListener,
);
