import React, { useState } from 'react';
import { querySampleCardList } from '../../../data/graphql/queries/SampleCardList';
import { useIsMounted } from '../../hooks/IsMounted';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { ROUTES } from '../../Navigator';
import { CardSearchFilterLayout } from './CardSearchFilterLayout';
import { Card } from '../../../domain/entities/Card';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export const CardSearchFilter: React.FC<Props> = (props: Props) => {
  const [cardName, setCardName] = useState('');
  const [supertype, setSupertype] = useState('');
  const [subtype, setSubtype] = useState('');
  const [colors, setColors] = useState(['']);
  const [colorIdentities, setColorIdentities] = useState(['']);
  const isMounted = useIsMounted();

  function byColor(card: Card): boolean | Card {
    if (!colors.filter(color => !!color).length) {
      return card;
    }
    return card.colors.some(color => colors.includes(color));
  }

  function byColorIdentity(card: Card): boolean | Card {
    if (!colorIdentities.filter(color => !!color).length) {
      return card;
    }
    return card.colorIdentities.some(color => colorIdentities.includes(color));
  }

  function bySubtype(card: Card): boolean | Card {
    if (!subtype) {
      return card;
    }
    return card.subTypes ? card.subTypes.includes(subtype) : card;
  }

  function bySupertype(card: Card): boolean | Card {
    if (!supertype) {
      return card;
    }
    return card.superTypes ? card.superTypes.includes(supertype) : card;
  }

  async function handleSubmit(): Promise<void> {
    const cards = await querySampleCardList();

    if (isMounted()) {
      props.navigation.navigate(ROUTES.CARD_SEARCH_RESULTS, {
        cardsFiltered: cards
          .filter(bySubtype)
          .filter(bySupertype)
          .filter(byColor)
          .filter(byColorIdentity),
      });
    }
  }

  return (
    <CardSearchFilterLayout
      onSubmitFilter={handleSubmit}
      cardName={cardName}
      setCardName={setCardName}
      supertype={supertype}
      setSupertype={setSupertype}
      subtype={subtype}
      setSubtype={setSubtype}
      colors={colors}
      setColors={setColors}
      colorIdentities={colorIdentities}
      setColorIdentities={setColorIdentities}
    />
  );
};
