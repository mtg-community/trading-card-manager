// @flow strict

import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { Navigator } from '../../navigator';
import { SCREENS } from '../../screens';
import { forgotPasswordAction } from '../../../../../domain/frameworks/redux';
import { GoBackToSignInFooter } from './presentational/goBackToSignInFooter';
import { PasswordForm } from './presentational/passwordForm';
import { connectReduxAndNavigator } from '../shared/hoc/screenHOC';

type PropsTypes = {
  forgotPassword: string => void,
  navigator: Navigator,
};

export class ForgotPasswordContainer extends Component<PropsTypes> {
  forgotPassword = async (email: string): Promise<void> => {
    this.props.forgotPassword(email);
  };

  navigateBack = () => {
    this.props.navigator.navigateBack();
  };

  navigateToSignIn = () => {
    this.props.navigator.navigateTo(SCREENS.SIGN_IN.route);
  };

  footer = <GoBackToSignInFooter navigateToSignIn={this.navigateToSignIn} />;

  render() {
    return (
      <PasswordForm
        onButtonPress={this.forgotPassword}
        buttonText={I18n.t('FORGOT_PASSWORD/BUTTON_TEXT')}
        title={I18n.t('FORGOT_PASSWORD/TITLE')}
        navigateBack={this.navigateBack}
        footer={this.footer}
      />
    );
  }
}

const mapDispatchToProps = {
  forgotPassword: forgotPasswordAction,
};

export const ForgotPasswordScreen = connectReduxAndNavigator(
  null,
  mapDispatchToProps,
)(ForgotPasswordContainer);
