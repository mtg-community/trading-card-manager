import React, { useState } from 'react';
import {
  CompositeNavigationProp,
  NavigationHelpers,
  ParamListBase,
} from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { querySampleCardList } from '../../../data/graphql/queries/SampleCardList';
import { useIsMounted } from '../../hooks/IsMounted';
import { ROUTES } from '../../Navigator';
import { CardSearchFilterLayout } from './CardSearchFilterLayout';
import { Color } from '../../../domain/entities/Color';

interface Props {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamListBase, 'CardSearchFilter'>,
    NavigationHelpers<ParamListBase>
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
    const cardsFiltered = await querySampleCardList();

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
