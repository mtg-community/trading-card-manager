// @flow strict

import React from 'react';
import { Navigator, CENTER_COMPONENT_ID } from '../../navigator';
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

const navigator = new Navigator(CENTER_COMPONENT_ID);

export const LeftSideMenuScreen = (props: PropTypes) => (
  <LeftSideMenu navigator={navigator} screens={screens} />
);
