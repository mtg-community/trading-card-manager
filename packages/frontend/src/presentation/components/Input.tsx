import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles/Input.styles';
import { Colors } from '../constants';

export const Input: React.FC<TextInputProps> = ({ ...props }) => (
  <TextInput
    style={styles.input}
    placeholderTextColor={Colors.placeholderText}
    {...props}
  />
);
