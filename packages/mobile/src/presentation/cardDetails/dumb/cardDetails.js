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

const getManaSymbol = (manaCost: string) => {
  const manaDictionary = {
    W: '&#xe600;',
    U: '&#xe601;',
    R: '&#xe603;',
    B: '&#xe602;',
    G: '&#xe604;',
    '1': '&#xe606;',
    '2': '&#xe607;',
    '3': '&#xe608;',
    '4': '&#xe609;',
    '5': '&#xe60a;',
    '6': '&#xe60b;',
    '7': '&#xe60c;',
    '8': '&#xe60d;',
    '9': '&#xe60e;',
    '10': '&#xe60f;',
    '11': '&#xe610;',
    '12': '&#xe611;',
    '13': '&#xe612;',
  };
  return manaDictionary[manaCost];
};

const renderManaCost = (manaCost: string) => (
  <View style={styles.rowContainer}>
    {manaCost
      .replace(/[{ }]/g, '')
      .split('')
      .map(cost => (
        <Text key={cost} style={styles.manaFont}>
          {getManaSymbol(cost)}
        </Text>
      ))}
  </View>
);

export const CardDetails = ({ card }: PropTypes) => (
  <SafeAreaView style={styles.container}>
    <CardImage multiverseId={card.multiverseId} />
    <Text style={styles.manaFont}>&#xe600;</Text>
    {renderRow(card.name)}
    {renderRow(card.type)}
    {renderRow(`${card.power}/${card.toughness}`)}
    {renderManaCost(card.manaCost)}
    {renderRow(`${card.manaCost} (${card.cmc})`)}
    {renderRow(card.rarity)}
    {renderRow(card.text)}
    {renderRow(card.flavor)}
  </SafeAreaView>
);
