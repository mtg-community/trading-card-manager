import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { ManaCost } from '../ManaCost';
import { Color } from '../../../domain/entities/Color';

interface Props {
  colors: Color[];
}

export const ColorsFilter: React.FC<Props> = (props: Props) => {
  if (!props.colors.length) {
    return null;
  }
  return (
    <View style={styles.filtersRow}>
      <Text>Colors:</Text>
      {props.colors.map(color => (
        <ManaCost key={color} manaCost={color} />
      ))}
    </View>
  );
};
