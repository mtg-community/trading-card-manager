// @flow strict

import * as React from 'react';
import { ForgotPasswordScreen } from './modules/authentication/forgotPasswordScreen';
import { SignInScreen } from './modules/authentication/signInScreen';
import { SignUpScreen } from './modules/authentication/signUpScreen';
import { ErrorScreen } from './modules/error/errorScreen';
import { HomeScreen } from './modules/home/homeScreen';
import { authStateListener } from './modules/shared/hoc/authenticationHOC';
import { LeftSideMenuScreen } from './modules/shared/leftSideMenuScreen';

export const SCREENS: ScreenType = {
  HOME: {
    route: 'navigation.mtgx.WelcomeScreen',
    component: authStateListener(HomeScreen),
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
  LEFT_MENU: {
    route: 'navigation.left.menu',
    component: LeftSideMenuScreen,
  },
};

export type ScreenType = {
  [string]: {|
    route: string,
    component: React.ComponentType<*>,
  |},
};
