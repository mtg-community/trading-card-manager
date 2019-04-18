// @flow strict

import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'core';
import { type ItemType } from '../shared/components/floatingActionButton';

import { CardDetails } from './dumb/cardDetails';
import type { ForeignName, Legality, Ruling } from 'core';
import { cards } from '../../data/cards/cardStubs';

const fabItems: Array<ItemType> = [
  {
    name: 'md-share',
    buttonColor: '#9b59b6',
    title: 'Share',
    onPress: () => {},
  },
  {
    name: 'md-folder-open',
    buttonColor: '#3498db',
    title: 'Add to Deck',
    onPress: () => {},
  },
  {
    name: 'md-swap',
    buttonColor: '#1abc9c',
    title: 'Add to TradeList',
    onPress: () => {},
  },
];

type PropTypes = {
  multiverseId: number,
  card: Card,
};

const cardStub = {
  multiverseId: '00',
  artist: 'something',
  id: 'something',
  name: 'something',
  number: 'something',
  rarity: 'something',
  type: 'something',
  cmc: 0,
  power: 'something',
  toughness: 'something',
  imageName: 'something',
  layout: 'something',
  manaCost: 'something',
  originalText: 'something',
  originalType: 'something',
  flavor: 'something',
  text: 'something',
  types: ['something'],
  subtypes: ['something'],
  superTypes: ['something'],
  colors: ['something'],
  colorIdentity: ['something'],
  printings: ['something'],
  rulings: ['something'],
  legalities: ['something'],
  foreignNames: ['something'],
};

const [lordOfAtlantis] = cards;

const CardDetailsContainer = (props: PropTypes) => (
  <CardDetails card={props.card || lordOfAtlantis} fabItems={fabItems} />
);

const mapStateToProps = state => {
  return {};
};

export const CardDetailsScreen = connect(mapStateToProps)(CardDetailsContainer);
