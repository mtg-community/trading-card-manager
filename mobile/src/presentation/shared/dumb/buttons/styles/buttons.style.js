import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../../../theme/constants';

export const styles = StyleSheet.create({
  primaryButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary500,
    height: Metrics.inputHeight,
  },
  primaryBackground: {
    backgroundColor: Colors.primary500,
  },
  simpleButton: {
    alignSelf: 'flex-start',
    padding: Metrics.baseMargin,
  },
  price: {
    ...Fonts.style.footnote,
    fontSize: 12,
    color: Colors.gray500,
  },
  secondaryButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary500,
    height: Metrics.inputHeight,
  },
  secondaryBackground: {
    backgroundColor: Colors.secondary500,
  },
  transparentButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Metrics.inputHeight,
  },
  primaryOutline: {
    borderColor: Colors.primary500,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Metrics.buttonRadius,
  },
  secondaryOutline: {
    borderColor: Colors.secondary500,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Metrics.buttonRadius,
  },
  darkenOutline: {
    borderColor: Colors.gray200alt,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius,
  },
  bottomRadius: {
    borderBottomRightRadius: Metrics.cardRadius,
    borderBottomLeftRadius: Metrics.cardRadius,
  },
  flat: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: Metrics.inputHeight,
    paddingHorizontal: Metrics.section,
  },
  whiteText: {
    ...Fonts.style.normal,
    color: Colors.white,
  },
  whiteTextSmall: {
    ...Fonts.style.description,
    color: Colors.white,
  },
  whiteTextCenter: {
    ...Fonts.style.normal,
    flex: 1,
    textAlign: 'center',
    color: Colors.white,
  },
  whiteSubtitleSmall: {
    ...Fonts.style.footnote,
    color: Colors.white,
  },
  whiteSubtitleCenter: {
    ...Fonts.style.description,
    flex: 1,
    textAlign: 'center',
    color: Colors.white,
  },
  primaryText: {
    ...Fonts.style.normal,
    color: Colors.primary500,
  },
  primaryTextCenter: {
    ...Fonts.style.normal,
    color: Colors.primary500,
  },
  primarySubtitle: {
    ...Fonts.style.description,
    flex: 1,
    textAlign: 'center',
    color: Colors.primary500,
  },
  secondaryText: {
    ...Fonts.style.normal,
    color: Colors.secondary500,
  },
  secondaryTextCenter: {
    ...Fonts.style.normal,
    flex: 1,
    textAlign: 'center',
    color: Colors.secondary500,
  },
  secondarySubtitle: {
    ...Fonts.style.description,
    color: Colors.secondary500,
  },
  infoWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrap: {
    height: '100%',
    width: Metrics.iconWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
