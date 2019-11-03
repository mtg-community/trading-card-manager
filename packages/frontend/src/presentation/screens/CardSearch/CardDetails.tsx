import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Card } from '../../../domain/entities/Card';
import { Text, View } from 'react-native';

interface NavigationParams {
  card: Card;
}

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const CardDetails: React.FC<Props> = (props: Props) => {
  const card = props.navigation.getParam('card');

  return (
    <View>
      <Text>Details</Text>
      <Text>{JSON.stringify(card, null, 2)}</Text>
    </View>
  );
};
