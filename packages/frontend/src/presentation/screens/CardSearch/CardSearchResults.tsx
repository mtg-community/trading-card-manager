import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
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
import { WishListModal } from '../../components/WishListModal';

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamListBase, ROUTES.CARD_SEARCH_RESULTS>,
    NavigationHelpers<ParamListBase>
  >;
  route: RouteProp<RootParamList, ROUTES.CARD_SEARCH_RESULTS>;
}

export const CardSearchResults: React.FC<Props> = (props: Props) => {
  const { cardsFiltered } = props.route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardId, handleChangeCardId] = useState('');

  function navigateTo(card: Card) {
    return (): void => {
      props.navigation.navigate(ROUTES.CARD_DETAILS, { card });
    };
  }

  function handleOpenModal(cardId: string): void {
    handleChangeCardId(cardId);
    setIsModalVisible(true);
  }

  function onRequestClose(): void {
    handleChangeCardId('cardId');
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        bounces={false}
        keyExtractor={(item): string => item.uuid}
        data={cardsFiltered}
        renderItem={({ item }): React.ReactElement => (
          <CardSearchResultItem
            card={item}
            onClick={navigateTo(item)}
            onLongPress={handleOpenModal}
          />
        )}
      />
      <WishListModal
        onRequestClose={onRequestClose}
        cardId={cardId}
        isVisible={isModalVisible}
      />
    </SafeAreaView>
  );
};

interface CardSearchResultItemProps {
  card: Card;
  onClick: () => void;
  onLongPress: (cardId: string) => void;
}

const CardSearchResultItem: React.FC<CardSearchResultItemProps> = (
  props: CardSearchResultItemProps,
) => {
  return (
    <TouchableOpacity
      style={styles.searchResult}
      onPress={props.onClick}
      onLongPress={(): void => props.onLongPress(props.card.id)}
    >
      <View style={styles.header}>
        <Text>{props.card.name}</Text>
        <ManaCost manaCost={props.card.manaCost} />
      </View>
      <Text>{props.card.text}</Text>
    </TouchableOpacity>
  );
};
