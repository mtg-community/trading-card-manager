// @flow strict

import React, { Component } from 'react';
import type { User } from 'react-native-firebase';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { pop, navigateTo } from '../../navigation';
import { SCREENS } from '../../navigation/screens';
import { signUpAction } from '../../redux/ducks/user';
import { EmailAndPasswordForm } from './presentational/emailAndPasswordForm';
import { GoBackToSignInFooter } from './presentational/goBackToSignInFooter';

type PropsTypes = {
  signUpUser: (string, string) => void,
};

export class SignUpContainer extends Component<PropsTypes> {
  signIn = async (email: string, password: string): Promise<void> => {
    this.props.signUpUser(email, password);
  };

  navigateBack = () => {
    // $FlowIgnoreNavigationComponentId
    pop(this.props.componentId);
  };

  navigateToSignIn = () => {
    // $FlowIgnoreNavigationComponentId
    navigateTo(SCREENS.SIGN_IN.route, this.props.componentId);
  };

  footer = <GoBackToSignInFooter navigateToSignIn={this.navigateToSignIn} />;

  render() {
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

const mapDispatchToProps = {
  signUpUser: signUpAction,
};

export const SignUpScreen = connect(
  null,
  mapDispatchToProps,
)(SignUpContainer);
