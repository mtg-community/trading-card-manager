// @flow strict

import React from 'react';
import { Navigator, CENTER_COMPONENT_ID } from '../';
import { NAVIGATION_DRAWER_LINKS } from '../screens';
import { LeftSideMenu } from './dumb/leftSideMenu';

type PropTypes = {
  navigator: Navigator,
};

export const LeftSideMenuScreen = (props: PropTypes) => (
  <LeftSideMenu
    navigator={new Navigator(CENTER_COMPONENT_ID)}
    screens={NAVIGATION_DRAWER_LINKS}
    {...props}
  />
);
