import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
  },
});

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  );
};
