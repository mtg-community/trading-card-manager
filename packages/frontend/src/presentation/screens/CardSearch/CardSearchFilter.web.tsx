import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/button/Button';
import { Label } from '../../components/label/Label';
import { querySampleCardList } from '../../../data/graphql/queries/SampleCardList';
import { useIsMounted } from '../../hooks/IsMounted';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { ROUTES } from '../../Navigator';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export const CardSearchFilter: React.FC<Props> = (props: Props) => {
  const [cardName, setCardName] = useState('');
  const isMounted = useIsMounted();

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const cards = await querySampleCardList();

    if (isMounted()) {
      props.navigation.navigate(ROUTES.CARD_SEARCH_RESULTS, {
        cardsFiltered: cards,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Card Name
        <Input value={cardName} onChangeText={setCardName} />
      </Label>
      <Button>Search</Button>
    </form>
  );
};
