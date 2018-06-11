// @flow strict

import React, { Component } from 'react';
import type { User } from 'react-native-firebase';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { Navigator } from '../../navigation';
import { signUpAction, selectUser } from '../../redux/ducks/user';
import type { StateType } from '../../redux/types';
import { EmailAndPasswordForm } from './presentational/emailAndPasswordForm';
import { GoBackToSignInFooter } from './presentational/goBackToSignInFooter';
import { connectReduxAndNavigator } from '../shared/hoc/screenHOC';

type PropsTypes = {
  user: ?User,
  signUpUser: (string, string) => void,
  navigator: Navigator,
};

export class SignUpContainer extends Component<PropsTypes> {
  signIn = async (email: string, password: string): Promise<void> => {
    this.props.signUpUser(email, password);
  };

  navigateBack = () => {
    this.props.navigator.navigateBack();
  };

  footer = <GoBackToSignInFooter navigateToSignIn={this.navigateBack} />;

  render() {
    if (this.props.user) {
      this.navigateBack();
      return null;
    }

    return (
      <EmailAndPasswordForm
        onButtonPress={this.signIn}
        buttonText={I18n.t('SIGN_UP/BUTTON_TEXT')}
        title={I18n.t('SIGN_UP/TITLE')}
        navigateBack={this.navigateBack}
        footer={this.footer}
      />
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  user: selectUser(state),
});

const mapDispatchToProps = {
  signUpUser: signUpAction,
};

export const SignUpScreen = connectReduxAndNavigator(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpContainer);
