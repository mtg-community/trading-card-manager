// @flow strict

import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '../../../shared/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  card: {
    marginHorizontal: Metrics.smallMargin,
    width: Metrics.screenWidth - Metrics.smallMargin * 2,
    height: (Metrics.screenWidth - Metrics.smallMargin * 2) * 1.4,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth - Metrics.baseMargin * 2,
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin,
  },
  rowRightAligned: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: Metrics.screenWidth - Metrics.baseMargin * 2,
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin * 2,
  },
  cardName: {
    fontSize: Fonts.size.h4,
    color: Colors.black,
  },
  rowText: {
    fontSize: Fonts.size.h5,
    color: Colors.black,
  },
  manaFont: {
    fontFamily: 'mana',
    fontSize: Fonts.size.h5,
  },
});
