// @flow strict

import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Metrics.marginVertical * 2,
  },
  footnote: {
    ...Fonts.style.footnote,
    color: Colors.gray500,
  },
  footnoteTextButton: {
    color: Colors.gray900,
    padding: Metrics.smallMargin,
  },
  lastItemSpacing: {
    marginHorizontal: Metrics.marginHorizontal * 2,
  },
});
