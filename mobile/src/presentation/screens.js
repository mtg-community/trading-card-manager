// @flow strict

import _ from 'lodash';
import * as React from 'react';

import { ForgotPasswordScreen } from './modules/authentication/forgotPasswordScreen';
import { SignInScreen } from './modules/authentication/signInScreen';
import { SignUpScreen } from './modules/authentication/signUpScreen';
import { CardDetailsScreen } from './modules/cardDetails/cardDetailsScreen';
import { ErrorScreen } from './modules/error/errorScreen';
import { HomeScreen } from './modules/home/homeScreen';
import { authStateListener } from './modules/shared/hoc/authenticationHOC';
import { LeftSideMenuScreen } from './modules/theme/leftSideMenuScreen';
import { RightSideMenuScreen } from './modules/theme/rightSideMenuScreen';
import { Screen } from './navigation/helpers/screen';

export const SCREENS: ScreenType = {
  HOME: new Screen(
    'navigation.mtgx.WelcomeScreen',
    authStateListener(HomeScreen),
    'Home',
  ),
  FORGOT_PASSWORD: new Screen(
    'authentication.mtgx.ForgotPassword',
    ForgotPasswordScreen,
  ),
  ERROR: new Screen('navigation.mtgx.ErrorScreen', ErrorScreen),
  SIGN_IN: new Screen('authentication.mtgx.SignInScreen', SignInScreen),
  SIGN_UP: new Screen('authentication.mtgx.SignUpScreen', SignUpScreen),
  LEFT_MENU: new Screen('navigation.left.menu', LeftSideMenuScreen),
  RIGHT_MENU: new Screen('navigation.right.menu', RightSideMenuScreen),
  CARD_DETAILS: new Screen('card.details', CardDetailsScreen, 'detalhes'),
};

export const NAVIGATION_DRAWER_LINKS = _.filter(
  SCREENS,
  screen => screen.title,
);

export const INITIAL_SCREEN = SCREENS.HOME.route;

export type ScreenType = {
  [string]: Screen,
};
