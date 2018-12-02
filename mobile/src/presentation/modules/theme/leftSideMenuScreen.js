// @flow strict

import React from 'react';
import { Navigator, CENTER_COMPONENT_ID } from '../../navigator';
import { NAVIGATION_DRAWER_LINKS } from '../../screens';
import { LeftSideMenu } from './presentational/leftSideMenu';

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
