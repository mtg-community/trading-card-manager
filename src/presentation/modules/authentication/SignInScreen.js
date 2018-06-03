// @flow strict

import React, { Component } from 'react';
import type { User } from 'react-native-firebase';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { selectUser, loginAction } from '../../redux/ducks/user';
import { EmailAndPasswordForm } from './emailAndPasswordForm';

type PropsTypes = {
  user: User,
  loginUser: (string, string) => void,
};

export class SignInContainer extends Component<PropsTypes> {
  signIn = async (email: string, password: string): Promise<void> => {
    this.props.loginUser('eduardo@email.com', 'abcdef');
  };

  showError = (error: Error) => {
    alert(`Error during signing in ${error.message}.`);
  };

  navigateBack = () => {};

  render() {
    return (
      <EmailAndPasswordForm
        onButtonPress={this.signIn}
        onErrorCallback={this.showError}
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
  loginUser: loginAction,
};

export const SignInScreen = connect(mapStateToProps, mapDispatchToProps)(
  SignInContainer,
);
