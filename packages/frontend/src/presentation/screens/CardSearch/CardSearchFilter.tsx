import React, { useState } from 'react';
import { querySampleCardList } from '../../../data/graphql/queries/SampleCardList';
import { useIsMounted } from '../../hooks/IsMounted';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { ROUTES } from '../../Navigator';
import { CardSearchFilterLayout } from './CardSearchFilterLayout';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export const CardSearchFilter: React.FC<Props> = (props: Props) => {
  const [cardName, setCardName] = useState('');
  const isMounted = useIsMounted();

  async function handleSubmit(): Promise<void> {
    const cards = await querySampleCardList();

    if (isMounted()) {
      props.navigation.navigate(ROUTES.CARD_SEARCH_RESULTS, {
        cardsFiltered: cards,
      });
    }
  }

  return (
    <CardSearchFilterLayout
      onSubmitFilter={handleSubmit}
      cardName={cardName}
      setCardName={setCardName}
    />
  );
};
