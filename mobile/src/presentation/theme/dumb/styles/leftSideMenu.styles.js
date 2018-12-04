// @flow strict strict

import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants';
import { Metrics } from '../../constants/metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: Metrics.doubleBaseMargin,
  },
  linkContainer: {},
  linkText: {
    ...Fonts.style.h2,
  },
});
