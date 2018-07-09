// @flow strict

import React from 'react';
import { Navigator } from '../../navigator';
import { SCREENS } from '../../screens';

import { connectReduxAndNavigator } from './hoc/screenHOC';
import { LeftSideMenu } from './presentational/leftSideMenu';

type PropTypes = {
  navigator: Navigator,
};

const screens = [
  {
    title: 'HOME',
    route: 'navigation.mtgx.WelcomeScreen',
  },
  {
    title: 'SIGN IN',
    route: 'authentication.mtgx.SignInScreen',
  },
];

const LeftSideMenuContainer = (props: PropTypes) => (
  <LeftSideMenu navigator={props.navigator} screens={screens} />
);
export const LeftSideMenuScreen = connectReduxAndNavigator()(
  LeftSideMenuContainer,
);
