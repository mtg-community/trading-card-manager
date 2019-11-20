import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
  cardName: string;
}

export const CardNameFilter: React.FC<Props> = (props: Props) => {
  if (!props.cardName) {
    return null;
  }
  return (
    <View style={styles.filtersRow}>
      <Text>Card Name:</Text>
      <Text>{props.cardName}</Text>
    </View>
  );
};
