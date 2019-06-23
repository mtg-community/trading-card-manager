// @flow strict

import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Card } from 'core';

import { styles } from './styles/cardDetails.styles';
import { ManaCost } from 'domain/entities/ManaCost';

type PropTypes = {
  card: Card,
};

const renderNameAndManaCost = (manaCost: string, name: string) => {
  const mana = new ManaCost(manaCost).toSymbol();
  return name ? (
    <View style={styles.rowContainer}>
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.manaFont}>{mana}</Text>
    </View>
  ) : null;
};

const renderTypeAndEdition = (type: string, printing: string) =>
  type ? (
    <View style={styles.rowContainer}>
      <Text style={styles.rowText}>{type}</Text>
      <Text style={styles.rowText}>{printing}</Text>
    </View>
  ) : null;

const renderPowerAndToughness = (power: string, toughness: string) =>
  power || toughness ? (
    <View style={styles.rowRightAligned}>
      <Text style={styles.rowText}>{`${power}/${toughness}`}</Text>
    </View>
  ) : null;

const renderRow = (rowText: string) =>
  rowText ? (
    <View style={styles.rowContainer}>
      <Text style={styles.rowText}>{rowText}</Text>
    </View>
  ) : null;

export const CardDetails = ({ card }: PropTypes) => (
  <SafeAreaView style={styles.container}>
    <View>
      {renderNameAndManaCost(card.manaCost, card.name)}
      {renderTypeAndEdition(card.type, card.printings[0])}
      {renderRow(card.text)}
      {renderRow(card.flavor)}
    </View>
    {renderPowerAndToughness(card.power, card.toughness)}
  </SafeAreaView>
);
