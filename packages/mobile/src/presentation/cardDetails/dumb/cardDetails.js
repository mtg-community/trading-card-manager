// @flow strict

import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import I18n from 'react-native-i18n';
import { Card } from 'core';
import { CardImage } from './cardImage';
import {
  FloatingActionButton,
  type ItemType,
} from '../../shared/components/floatingActionButton';

import { styles } from './styles/cardDetails.styles';

type PropTypes = {
  card: Card,
  fabItems: Array<ItemType>,
};

const renderRow = (rowName: string, rowText: string) =>
  rowText ? (
    <View style={styles.rowContainer}>
      <Text style={styles.rowText}>
        <Text style={styles.rowName}>{`${I18n.t(rowName)}: `}</Text>
        {rowText}
      </Text>
    </View>
  ) : null;

export const CardDetails = ({ card, fabItems }: PropTypes) => (
  <ScrollView style={styles.container}>
    <CardImage style={styles.card} multiverseId={card.multiverseId} />
    {renderRow('CARD_NAME', card.name)}
    {renderRow('TYPE', card.type)}
    {renderRow('POWER_TOUGHNESS', `${card.power}/${card.toughness}`)}
    {renderRow('MANA_COST', `${card.manaCost} (${card.cmc})`)}
    {renderRow('RARITY', card.rarity)}
    {renderRow('CARD_TEXT', card.text)}
    {renderRow('FLAVOR_TEXT', card.flavor)}
    <FloatingActionButton items={fabItems} />
  </ScrollView>
);
