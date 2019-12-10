import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {
  CompositeNavigationProp,
  NavigationHelpers,
  ParamListBase,
  RouteProp,
} from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../../../domain/entities/Card';
import { RootParamList, ROUTES } from '../../Navigator';
import { styles } from './styles';
import { ManaCost } from '../../components/ManaCost';

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamListBase, ROUTES.CARD_SEARCH_RESULTS>,
    NavigationHelpers<ParamListBase>
  >;
  route: RouteProp<RootParamList, ROUTES.CARD_SEARCH_RESULTS>;
}

export const CardSearchResults: React.FC<Props> = (props: Props) => {
  const { cardsFiltered } = props.route.params;

  function navigateTo(card: Card) {
    return (): void => {
      props.navigation.navigate(ROUTES.CARD_DETAILS, { card });
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        bounces={false}
        keyExtractor={(item): string => item.uuid}
        data={cardsFiltered}
        renderItem={({ item }): React.ReactElement => (
          <CardSearchResultItem card={item} onClick={navigateTo(item)} />
        )}
      />
    </SafeAreaView>
  );
};

interface CardSearchResultItemProps {
  card: Card;
  onClick: () => void;
}

const CardSearchResultItem: React.FC<CardSearchResultItemProps> = (
  props: CardSearchResultItemProps,
) => {
  return (
    <TouchableOpacity style={styles.searchResult} onPress={props.onClick}>
      <View style={styles.header}>
        <Text>{props.card.name}</Text>
        <ManaCost manaCost={props.card.manaCost} />
      </View>
      <Text>{props.card.text}</Text>
    </TouchableOpacity>
  );
};
