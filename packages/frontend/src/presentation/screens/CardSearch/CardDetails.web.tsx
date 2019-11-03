import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Card } from '../../../domain/entities/Card';

interface NavigationParams {
  card: Card;
}

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const CardDetails: React.FC<Props> = (props: Props) => {
  const card = props.navigation.getParam('card');

  return (
    <div>
      Hi <span>{card.name}</span>
    </div>
  );
};
