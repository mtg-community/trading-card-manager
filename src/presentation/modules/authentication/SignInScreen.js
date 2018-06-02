// @flow strict

import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { EmailAndPasswordForm } from './emailAndPasswordForm';

type PropsTypes = {};

export class SignIncontainer extends Component<PropsTypes> {
  signIn = (email: string, password: string) => {};
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export const SignInScreen = connect(mapStateToProps, mapDispatchToProps)(
  SignIncontainer,
);
