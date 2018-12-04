import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { bool, func } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Metrics, Colors } from '../../../theme/constants';
import { Touchable } from '../touchable';

const [backButtonName, backButtonSize, backButtonStyle] =
  Platform.OS === 'ios'
    ? [
        'chevron-left',
        Metrics.icons.xl,
        { backgroundColor: 'transparent', right: Metrics.baseMargin },
      ]
    : ['arrow-left', Metrics.icons.medium, {}];

const floatingBackButtonStyle = androidNavbarFix => [
  styles.floatingBackButton,
  {
    top:
      Platform.OS === 'android' && androidNavbarFix
        ? 4
        : Metrics.statusBarHeight,
  },
];

export const BackButtonFloating = ({ androidNavbarFix, onPress }) => (
  <Touchable
    borderless
    onPress={onPress}
    style={floatingBackButtonStyle(androidNavbarFix)}
  >
    <Icon
      color={Colors.gray700}
      name={backButtonName}
      size={backButtonSize}
      style={backButtonStyle}
    />
  </Touchable>
);
BackButtonFloating.propTypes = {
  androidNavbarFix: bool,
  onPress: func.isRequired,
};
BackButtonFloating.defaultProps = {
  androidNavbarFix: false,
};

const styles = StyleSheet.create({
  floatingBackButton: {
    alignItems: 'center',
    aspectRatio: 1,
    height: Metrics.navBarButtonHeight,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
  },
});
