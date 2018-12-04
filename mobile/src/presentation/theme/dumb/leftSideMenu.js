// @flow strict

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Navigator } from '../../navigation';
import { Screen } from '../../navigation/helpers/screen';
import { styles } from './styles/leftSideMenu.styles';

type PropTypes = {
  navigator: Navigator,
  screens: Array<Screen>,
};

export const LeftSideMenu = (props: PropTypes) => (
  <View style={styles.container}>
    {props.screens.map(screen => (
      <TouchableOpacity
        key={screen.route}
        style={styles.linkContainer}
        onPress={() => props.navigator.pushToRoot(screen.route)}
      >
        <Text style={styles.linkText}>{screen.title}</Text>
      </TouchableOpacity>
    ))}
  </View>
);
