// @flow strict

import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  rowText: {
    fontSize: Fonts.size.regular,
    color: Colors.black,
  },
});
