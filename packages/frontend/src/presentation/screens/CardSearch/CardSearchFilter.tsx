import React, { useState } from 'react';
import { querySampleCardList } from '../../../data/graphql/queries/SampleCardList';
import { useIsMounted } from '../../hooks/IsMounted';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { ROUTES } from '../../Navigator';
import { CardSearchFilterLayout } from './CardSearchFilterLayout';
import { Color } from '../../../domain/entities/Color';

export interface CardSearchFilterNavigationParams {}

interface Props {
  navigation: NavigationScreenProp<
    NavigationState,
    CardSearchFilterNavigationParams
  >;
}

export const CardSearchFilter: React.FC<Props> = (props: Props) => {
  const [cardName, setCardName] = useState('');
  const [supertype, setSupertype] = useState('');
  const [subtype, setSubtype] = useState('');
  const [colors, setColors] = useState<Array<Color>>([]);
  const [colorIdentities, setColorIdentities] = useState<Array<Color>>([]);
  const isMounted = useIsMounted();

  async function handleSubmit(): Promise<void> {
    const cardsFiltered = await querySampleCardList(subtype);

    if (isMounted()) {
      props.navigation.navigate(ROUTES.CARD_SEARCH_RESULTS, {
        cardsFiltered,
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
