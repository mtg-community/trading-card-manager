// @flow strict

import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { Navigator } from 'presentation/navigator';
import { SCREENS } from 'presentation/screens';
import { forgotPasswordAction } from 'domain/src/frameworks/redux';
import { GoBackToSignInFooter } from './dumb/goBackToSignInFooter';
import { PasswordForm } from './dumb/passwordForm';
import { connectReduxAndNavigator } from '../shared/hoc/screenHOC';

type PropsTypes = {
  forgotPassword: (string, () => void, (Error) => void) => void,
  navigator: Navigator,
};

export class ForgotPasswordContainer extends Component<PropsTypes> {
  forgotPassword = async (email: string): Promise<void> => {
    const onSuccess = () => alert(I18n.t('PASSWORD_RECOVERY/ALERT/MESSAGE'));
    const onError = (error: Error) => {
      const title = I18n.t('SIGN_UP/ERROR_TITLE');
      Navigator.showModal(SCREENS.ERROR, title, { error, title });
    };
    this.props.forgotPassword(email, onSuccess, onError);
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
