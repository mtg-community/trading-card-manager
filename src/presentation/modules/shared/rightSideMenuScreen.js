// @flow strict

import React from 'react';
import { Navigator } from '../../navigator';
import { LeftSideMenu } from './presentational/leftSideMenu';

type PropTypes = {
  navigator: Navigator,
};

const screens = [];
const navigator = new Navigator('MAIN_COMPONENT_ID');

export const RightSideMenuScreen = (props: PropTypes) => (
  <LeftSideMenu navigator={navigator} screens={screens} />
);
