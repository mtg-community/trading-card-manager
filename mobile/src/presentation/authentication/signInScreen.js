// @flow strict

import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import type { StateType } from '../../../../domain/src/frameworks/redux/types';
import { User } from '../../../../domain/src/entities/user';
import { Navigator } from '../shared/navigation';
import { SCREENS } from '../shared/navigation/screens';
import {
  selectUser,
  loginAction,
} from '../../../../domain/src/frameworks/redux';
import { EmailAndPasswordForm } from './dumb/emailAndPasswordForm';
import { SignInFooter } from './dumb/signInFooter';
import { connectReduxAndNavigator } from '../shared/navigation/hoc/screenHOC';

type PropsTypes = {
  user: ?User,
  redirectTo: string,
  navigator: Navigator,
  loginUser: (string, string, (Error) => void) => void,
};

export class SignInContainer extends Component<PropsTypes> {
  static defaultProps = {
    redirectTo: 'navigation.mtgx.WelcomeScreen',
  };

  signIn = async (email: string, password: string): Promise<void> => {
    const onError = (error: Error) => {
      const title = I18n.t('SIGN_IN/ERROR_TITLE');
      Navigator.showModal(SCREENS.ERROR, title, { error, title });
    };

    await this.props.loginUser(email, password, onError);
  };

  navigateTo = (screenName: string, passProps: ?{}) => () => {
    this.props.navigator.navigateTo(screenName, passProps);
  };

  footer = (
    <SignInFooter
      navigateToForgotPassword={this.navigateTo(SCREENS.FORGOT_PASSWORD.route)}
      navigateToSignUp={this.navigateTo(SCREENS.SIGN_UP.route)}
    />
  );

  render() {
    if (this.props.user) {
      this.props.navigator.navigateTo(this.props.redirectTo);
      return null;
    }

    return (
      <EmailAndPasswordForm
        onButtonPress={this.signIn}
        buttonText={I18n.t('SIGN_IN/BUTTON_TEXT')}
        title={I18n.t('SIGN_IN/TITLE')}
        navigateBack={this.props.navigator.navigateBack}
        footer={this.footer}
      />
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  user: selectUser(state),
});

const mapDispatchToProps = {
  loginUser: loginAction,
};

export const SignInScreen = connectReduxAndNavigator(
  mapStateToProps,
  mapDispatchToProps,
)(SignInContainer);
