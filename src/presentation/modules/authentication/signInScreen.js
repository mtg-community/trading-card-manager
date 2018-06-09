// @flow strict

import React, { Component } from 'react';
import type { User } from 'react-native-firebase';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { pop, navigateTo } from '../../navigation';
import { SCREENS } from '../../navigation/screens';
import { selectUser, loginAction } from '../../redux/ducks/user';
import { EmailAndPasswordForm } from './presentational/emailAndPasswordForm';
import { SignInFooter } from './presentational/signInFooter';

type PropsTypes = {
  loginUser: (string, string) => void,
};

export class SignInContainer extends Component<PropsTypes> {
  signIn = async (email: string, password: string): Promise<void> => {
    this.props.loginUser(email, password);
  };

  navigateBack = () => {
    // $FlowIgnoreNavigationComponentId
    pop(this.props.componentId);
  };

  navigateTo = (screenName: string) => () => {
    // $FlowIgnoreNavigationComponentId
    navigateTo(screenName, this.props.componentId);
  };

  footer = (
    <SignInFooter
      navigateToForgotPassword={this.navigateTo(SCREENS.FORGOT_PASSWORD.route)}
      navigateToSignUp={this.navigateTo(SCREENS.SIGN_UP.route)}
    />
  );

  render() {
    return (
      <EmailAndPasswordForm
        onButtonPress={this.signIn}
        buttonText={I18n.t('SIGN_IN/BUTTON_TEXT')}
        title={I18n.t('SIGN_IN/TITLE')}
        navigateBack={this.navigateBack}
        footer={this.footer}
      />
    );
  }
}

const mapDispatchToProps = {
  loginUser: loginAction,
};

export const SignInScreen = connect(
  null,
  mapDispatchToProps,
)(SignInContainer);
