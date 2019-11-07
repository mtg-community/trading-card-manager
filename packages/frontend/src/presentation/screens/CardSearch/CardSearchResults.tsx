import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Card } from '../../../domain/entities/Card';
import { ROUTES } from '../../Navigator';
import { styles } from './styles';
import { ManaCost } from '../../components/ManaCost';

interface NavigationParams {
  cardsFiltered: Card[];
}

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const CardSearchResults: React.FC<Props> = (props: Props) => {
  const cards = props.navigation.getParam('cardsFiltered', []);

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
        data={cards}
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
