// @flow strict

import React, { Component } from 'react';
import type { User } from 'react-native-firebase';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { signInWithEmailAndPassword } from '../../../data/firebase/authentication';
import { selectUser, setUserAction } from '../../redux/ducks/user';
import { EmailAndPasswordForm } from './emailAndPasswordForm';

type PropsTypes = {
  user: User,
  saveUserIntoState: User => void,
};

export class SignInContainer extends Component<PropsTypes> {
  signIn = async (email: string, password: string): Promise<void> => {
    const userCredential = await signInWithEmailAndPassword(
      'eduardomoroni@gmail.com',
      '123456',
    );
    this.props.saveUserIntoState(userCredential.user);
  };

  navigateBack = () => {};

  render() {
    return (
      <EmailAndPasswordForm
        onButtonPress={this.signIn}
        buttonText={I18n.t('SIGN_IN/BUTTON_TEXT')}
        title={I18n.t('SIGN_IN/TITLE')}
        navigateBack={this.navigateBack}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: selectUser(state),
});

const mapDispatchToProps = {
  saveUserIntoState: setUserAction,
};

export const SignInScreen = connect(mapStateToProps, mapDispatchToProps)(
  SignInContainer,
);
