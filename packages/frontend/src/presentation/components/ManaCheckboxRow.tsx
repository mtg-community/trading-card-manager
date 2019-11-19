import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Color } from '../../domain/entities/Color';
import { ManaCheckbox } from './ManaCheckbox';

interface Props {
  colors: Array<Color>;
  setColors: (colors: Array<Color>) => void;
}

export const styles = StyleSheet.create({
  manaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 8,
  },
});

export const ManaCheckboxRow: React.FC<Props> = (props: Props) => {
  const { colors, setColors } = props;
  function handleSelectColor(color: Color): void {
    if (colors.includes(color)) {
      return setColors(colors.filter(elem => elem != color));
    }
    return setColors(colors.concat(color));
  }
  return (
    <View style={styles.manaRow}>
      <ManaCheckbox
        onSelectColor={handleSelectColor}
        color={Color.W}
        isSelected={colors.includes(Color.W)}
      />
      <ManaCheckbox
        onSelectColor={handleSelectColor}
        color={Color.B}
        isSelected={colors.includes(Color.B)}
      />
      <ManaCheckbox
        onSelectColor={handleSelectColor}
        color={Color.R}
        isSelected={colors.includes(Color.R)}
      />
      <ManaCheckbox
        onSelectColor={handleSelectColor}
        color={Color.U}
        isSelected={colors.includes(Color.U)}
      />
      <ManaCheckbox
        onSelectColor={handleSelectColor}
        color={Color.G}
        isSelected={colors.includes(Color.G)}
      />
      <ManaCheckbox
        onSelectColor={handleSelectColor}
        color={Color.C}
        isSelected={colors.includes(Color.C)}
      />
    </View>
  );
};
