import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Subtype } from '../../../domain/entities/Subtype';

interface Props {
  subtype: Subtype;
}

export const SubtypeFilter: React.FC<Props> = (props: Props) => {
  if (!props.subtype) {
    return null;
  }
  return (
    <View style={styles.filtersRow}>
      <Text>Subtype:</Text>
      <Text>{props.subtype}</Text>
    </View>
  );
};
