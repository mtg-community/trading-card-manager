import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Card } from '../../../domain/entities/Card';
import { ROUTES } from '../../Navigator';
import './CardSearchResults.css';

interface NavigationParams {
  cardsFiltered: Card[];
}

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const CardSearchResults: React.FC<Props> = (props: Props) => {
  const cards = props.navigation.getParam('cardsFiltered');

  function navigateTo(card: Card) {
    return (): void => {
      props.navigation.navigate(ROUTES.CARD_DETAILS, { card });
    };
  }

  return (
    <ul>
      {cards.map(card => (
        <CardSearchResultItem
          card={card}
          key={card.id}
          onClick={navigateTo(card)}
        />
      ))}
    </ul>
  );
};

interface CardSearchResultItemProps {
  card: Card;
  onClick: () => void;
}

const CardSearchResultItem: React.FC<CardSearchResultItemProps> = (
  props: CardSearchResultItemProps,
) => {
  return <li onClick={props.onClick}>{props.card.name}</li>;
};
