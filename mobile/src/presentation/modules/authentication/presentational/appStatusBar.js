// @flow strict

import React from 'react';
import { StatusBar } from 'react-native';

import { Colors } from '../../theme/constants';

export const AppStatusBar = () => (
  <StatusBar translucent backgroundColor={Colors.statusBar} />
);
