// @flow strict

import { StyleSheet } from 'react-native';
import { Metrics } from '../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
