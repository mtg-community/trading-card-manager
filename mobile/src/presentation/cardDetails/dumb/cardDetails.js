// @flow strict

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import I18n from 'react-native-i18n';
import { Card } from '../../../../../core/src/entities';
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

export class CardDetails extends Component<PropTypes> {
  renderRow = (rowName: string, rowText: string) => {
    if (rowText === null) {
      return null;
    }

    return (
      <View style={styles.rowContainer}>
        <Text style={styles.rowText}>
          <Text style={styles.rowName}>{`${I18n.t(rowName)}: `}</Text>
          {rowText}
        </Text>
      </View>
    );
  };

  render() {
    const { card } = this.props;

    return (
      <ScrollView style={styles.container}>
        <CardImage style={styles.card} multiverseId={card.multiverseId} />
        {this.renderRow('CARD_NAME', card.name)}
        {this.renderRow('TYPE', card.type)}
        {this.renderRow('POWER_TOUGHNESS', `${card.power}/${card.toughness}`)}
        {this.renderRow('MANA_COST', `${card.manaCost} (${card.cmc})`)}
        {this.renderRow('RARITY', card.rarity)}
        {this.renderRow('CARD_TEXT', card.text)}
        {this.renderRow('FLAVOR_TEXT', card.flavor)}
        <FloatingActionButton items={this.props.fabItems} />
      </ScrollView>
    );
  }
}
