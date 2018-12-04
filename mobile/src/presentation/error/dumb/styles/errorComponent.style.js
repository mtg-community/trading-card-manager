// @flow strict

import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen,
    justifyContent: 'center',
  },
  message: {
    ...Fonts.style.h5,
    color: Colors.gray900,
  },
});
