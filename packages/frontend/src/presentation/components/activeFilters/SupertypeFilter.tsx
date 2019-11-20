import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Supertype } from '../../../domain/entities/Supertype';

interface Props {
  supertype: Supertype;
}

export const SupertypeFilter: React.FC<Props> = (props: Props) => {
  if (!props.supertype) {
    return null;
  }
  return (
    <View style={styles.filtersRow}>
      <Text>Supertype:</Text>
      <Text>{props.supertype}</Text>
    </View>
  );
};
