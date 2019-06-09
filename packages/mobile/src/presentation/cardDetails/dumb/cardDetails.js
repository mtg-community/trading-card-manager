// @flow strict

import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Card } from 'core';

import { styles } from './styles/cardDetails.styles';
import { CardImage } from './cardImage';

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
    {renderRow(card.name)}
    {renderRow(card.type)}
    {renderRow(`${card.power}/${card.toughness}`)}
    {renderRow(`${card.manaCost} (${card.cmc})`)}
    {renderRow(card.rarity)}
    {renderRow(card.text)}
    {renderRow(card.flavor)}
  </SafeAreaView>
);
