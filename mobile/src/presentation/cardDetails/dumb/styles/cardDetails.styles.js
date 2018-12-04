// @flow strict

import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: Metrics.smallMargin,
    width: Metrics.screenWidth - Metrics.smallMargin * 2,
    height: (Metrics.screenWidth - Metrics.smallMargin * 2) * 1.4,
  },
  rowContainer: {
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowName: {
    color: Colors.black,
  },
  rowText: {
    fontSize: Fonts.size.regular,
  },
});
