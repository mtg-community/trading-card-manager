// @flow strict

import React from 'react';
import { StatusBar } from 'react-native';

import { Colors } from '../../theme/constants/index';

export const AppStatusBar = () => (
  <StatusBar translucent backgroundColor={Colors.statusBar} />
);
