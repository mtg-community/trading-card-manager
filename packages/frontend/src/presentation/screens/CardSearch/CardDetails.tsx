import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Card } from '../../../domain/entities/Card';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ManaCost } from '../../components/ManaCost';
import { Colors } from '../../constants';

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
      <View style={styles.cardNavBar}>
        <TouchableOpacity onPress={(): boolean => props.navigation.goBack()}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color={Colors.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.regularText}>{name}</Text>
        <ManaCost manaCost={manaCost} />
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.regularText}>{superType}</Text>
        <Text style={styles.regularText}>{` ${type} `}</Text>
        <Text style={styles.regularText}>{`- ${subtype}`}</Text>
      </View>
      <View style={styles.cardDetailsContent}>
        <Text style={styles.regularText}>{text}</Text>
      </View>
      <View style={styles.header}>
        <View>
          <Text style={styles.regularText}>{number}</Text>
          <Text style={styles.regularText}>{artist}</Text>
        </View>
        <Text style={styles.regularText}>{loyalty}</Text>
      </View>
    </SafeAreaView>
  );
};
