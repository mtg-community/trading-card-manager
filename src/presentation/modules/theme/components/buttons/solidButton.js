import React from 'react';
import { Text } from 'react-native';
import { Touchable } from '../touchable';
import { styles } from './styles/buttons.style';

const getButtonStyle = isSecondary =>
  isSecondary ? styles.secondaryButton : styles.primaryButton;

export const SolidButton = ({ title, onPress, secondary }) => (
  <Touchable borderless style={getButtonStyle(secondary)} onPress={onPress}>
    <Text style={styles.whiteText}>{title}</Text>
  </Touchable>
);
