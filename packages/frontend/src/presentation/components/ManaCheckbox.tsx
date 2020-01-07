import React from 'react';
import { Color } from '../../domain/entities/Color';
import { ManaCost } from './ManaCost';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants';

interface Props {
  color: Color;
  isSelected: boolean;
  onSelectColor: (color: Color) => void;
}

const styles = StyleSheet.create({
  manaButton: {
    borderRadius: 4,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
  },
});

export const ManaCheckbox: React.FC<Props> = (props: Props) => {
  const { color, isSelected, onSelectColor } = props;
  const renderContent = (): React.ReactNode =>
    !isSelected ? (
      <ManaCost manaCost={color} />
    ) : (
      <Ionicons name="ios-checkmark" size={26} />
    );
  return (
    <TouchableOpacity
      style={styles.manaButton}
      onPress={(): void => onSelectColor(color)}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};
