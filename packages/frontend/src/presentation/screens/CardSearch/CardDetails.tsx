import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Card } from '../../../domain/entities/Card';
import { Text, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { ManaCost } from '../../components/ManaCost';

interface NavigationParams {
  card: Card;
}

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const CardDetails: React.FC<Props> = (props: Props) => {
  const card = props.navigation.getParam('card');
  const {
    name,
    manaCost,
    text,
    power,
    toughness,
    subTypes,
    superTypes,
    types,
    number,
    loyalty,
    artist,
  } = card;
  const [superType] = superTypes || [''];
  const [type] = types || [''];
  const [subtype] = subTypes || [''];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>{name}</Text>
        <ManaCost manaCost={manaCost} />
      </View>
      <View style={styles.subHeader}>
        <Text>{superType}</Text>
        <Text>{` ${type} `}</Text>
        <Text>{`- ${subtype}`}</Text>
      </View>
      <View style={styles.cardDetailsContent}>
        <Text>{text}</Text>
      </View>
      <View style={styles.header}>
        <View>
          <Text>{number}</Text>
          <Text>{artist}</Text>
        </View>
        <Text>{loyalty}</Text>
      </View>
    </SafeAreaView>
  );
};
