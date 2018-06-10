// @flow strict

import * as React from 'react';
import { ForgotPasswordScreen } from '../modules/authentication/forgotPasswordScreen';

import { authenticated } from '../modules/authentication/hoc/authenticationDecorator';
import { SignInScreen } from '../modules/authentication/signInScreen';
import { SignUpScreen } from '../modules/authentication/signUpScreen';
import { ErrorScreen } from '../modules/error/errorScreen';
import { HomeScreen } from '../modules/home/homeScreen';

export const SCREENS: ScreenType = {
  HOME: {
    route: 'navigation.mtgx.WelcomeScreen',
    component: authenticated(HomeScreen),
  },
  ERROR: {
    route: 'navigation.mtgx.ErrorScreen',
    component: ErrorScreen,
  },
  SIGN_IN: {
    route: 'authentication.mtgx.SignInScreen',
    component: SignInScreen,
  },
  SIGN_UP: {
    route: 'authentication.mtgx.SignUpScreen',
    component: SignUpScreen,
  },
  FORGOT_PASSWORD: {
    route: 'authentication.mtgx.ForgotPassword',
    component: ForgotPasswordScreen,
  },
};

export type ScreenType = {
  [string]: {|
    route: string,
    component: React.ComponentType<*>,
  |},
};
