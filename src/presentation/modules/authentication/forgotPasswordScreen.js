// @flow strict

import React, { Component } from 'react';
import type { User } from 'react-native-firebase';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { Navigator } from '../../navigation/index';
import { SCREENS } from '../../navigation/screens';
import { forgotPasswordAction } from '../../redux/ducks/user';
import { PasswordForm } from './presentational/passwordForm';
import { GoBackToSignInFooter } from './presentational/goBackToSignInFooter';

type PropsTypes = {
  forgotPassword: string => void,
};

type StatesType = {
  navigator: Navigator,
};

export class ForgotPasswordContainer extends Component<PropsTypes, StatesType> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      // $FlowIgnoreNavigationComponentId
      navigator: new Navigator(props.componentId),
    };
  }

  forgotPassword = async (email: string): Promise<void> => {
    this.props.forgotPassword(email);
  };

  navigateBack = () => {
    // $FlowIgnoreNavigationComponentId
    this.state.navigator.navigateBack();
  };

  navigateToSignIn = () => {
    this.state.navigator.navigateTo(SCREENS.SIGN_IN.route);
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

export const ForgotPasswordScreen = connect(
  null,
  mapDispatchToProps,
)(ForgotPasswordContainer);
