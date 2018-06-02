// @flow strict

import React from 'react';
import { StatusBar } from 'react-native';

import { Colors } from '../constants';

export const AppStatusBar = () => (
  <StatusBar translucent backgroundColor={Colors.statusBar} />
);
