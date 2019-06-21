// @flow strict

import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Card } from 'core';

import { styles } from './styles/cardDetails.styles';
import { CardImage } from './cardImage';
import { placeholdersToSymbols } from 'domain/manaConverter';

type PropTypes = {
  card: Card,
};

const renderRow = (rowText: string) =>
  rowText ? (
    <View style={styles.rowContainer}>
      <Text style={styles.rowText}>{rowText}</Text>
    </View>
  ) : null;

export const CardDetails = ({ card }: PropTypes) => (
  <SafeAreaView style={styles.container}>
    <CardImage multiverseId={card.multiverseId} />
    <Text style={styles.manaFont}>{placeholdersToSymbols(card.manaCost)}</Text>
    {renderRow(card.name)}
    {renderRow(card.type)}
    {renderRow(`${card.power}/${card.toughness}`)}
    {renderRow(`${card.manaCost} (${card.cmc})`)}
    {renderRow(card.rarity)}
    {renderRow(card.text)}
    {renderRow(card.flavor)}
  </SafeAreaView>
);
