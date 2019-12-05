import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { ManaCost } from '../../components/ManaCost';
import {
  CompositeNavigationProp,
  NavigationHelpers,
  ParamListBase,
  RouteProp,
} from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList, ROUTES } from '../../Navigator';

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamListBase, ROUTES.CARD_DETAILS>,
    NavigationHelpers<ParamListBase>
  >;
  route: RouteProp<RootParamList, ROUTES.CARD_DETAILS>;
}

export const CardDetails: React.FC<Props> = (props: Props) => {
  const { card } = props.route.params;
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
  props.navigation.setOptions({
    title: name,
  });
  const [superType] = superTypes || [''];
  const [type] = types || [''];
  const [subtype] = subTypes || [''];
  return (
    <SafeAreaView style={styles.container}>
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
