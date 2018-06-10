// @flow strict

import React, { Component } from 'react';
import type { User } from 'react-native-firebase';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { pop, navigateTo } from '../../navigation';
import { SCREENS } from '../../navigation/screens';
import { signUpAction, selectUser } from '../../redux/ducks/user';
import type { StateType } from '../../redux/types';
import { EmailAndPasswordForm } from './presentational/emailAndPasswordForm';
import { GoBackToSignInFooter } from './presentational/goBackToSignInFooter';

type PropsTypes = {
  user: ?User,
  redirectTo: string,
  signUpUser: (string, string) => void,
};

type StatesType = {
  navigator: Navigator,
};

export class SignUpContainer extends Component<PropsTypes, StatesType> {
  constructor(props: PropsTypes) {
    super(props);
    this.state = {
      // $FlowIgnoreNavigationComponentId
      navigator: new Navigator(props.componentId),
    };
  };

  signIn = async (email: string, password: string): Promise<void> => {
    this.props.signUpUser(email, password);
  };

  navigateBack = () => {
    // $FlowIgnoreNavigationComponentId
    pop(this.props.componentId);
  };

  navigateToSignIn = () => {
    this.navigateTo(SCREENS.SIGN_IN.route, { redirectTo: SCREENS.HOME.route });
  };

  navigateTo = (screenName: string, passProps: ?{}) => () => {
    // $FlowIgnoreNavigationComponentId
    navigateTo(screenName, this.props.componentId, passProps);
  };

  footer = <GoBackToSignInFooter navigateToSignIn={this.navigateToSignIn} />;

  render() {
    if (this.props.user) {
      // $FlowIgnoreNavigationComponentId
      this.navigateTo(this.props.redirectTo);
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

export const SignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpContainer);
