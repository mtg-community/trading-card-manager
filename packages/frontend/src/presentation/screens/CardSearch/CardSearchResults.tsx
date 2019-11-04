import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Card } from '../../../domain/entities/Card';
import { ROUTES } from '../../Navigator';
import { Button } from '../../components/button/Button';
import { styles } from './styles';

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
        keyExtractor={(item): string => item.id}
        data={cards}
        renderItem={({ item }) => (
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
  return <Button onPress={props.onClick} label={props.card.name} />;
};
