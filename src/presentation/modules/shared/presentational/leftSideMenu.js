// @flow strict

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigator } from '../../../navigator';
import { styles } from './styles/leftSideMenu.styles';

type PropTypes = {
  navigator: Navigator,
  screens: Array<{|
    title: string,
    route: string,
  |}>,
};

export const LeftSideMenu = (props: PropTypes) => (
  <View style={styles.container}>
    {props.screens.map(screen => (
      <TouchableOpacity
        key={screen.route}
        style={styles.linkContainer}
        onPress={() => props.navigator.navigateTo(screen.route)}
      >
        <Text style={styles.linkText}>{screen.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);
