// @flow strict

import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.overlay,
  },
  spinner: {
    width: 200,
    height: 200,
  },
});
