import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { styles } from './styles/Input.styles';
import { Colors } from '../constants/colors';

export const Input: React.FC<TextInputProps> = ({ ...props }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholderTextColor={Colors.placeholderText}
      {...props}
    />
  </View>
);
