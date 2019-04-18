// @flow strict

import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'core';
import { type ItemType } from '../shared/components/floatingActionButton';
import { CardDetails } from './dumb/cardDetails';
import { snapMage } from '../../data/cards/cardStubs';

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
  card: Card,
};

const CardDetailsContainer = (props: PropTypes) => (
  <CardDetails card={snapMage} fabItems={fabItems} />
);

const mapStateToProps = state => {
  return {};
};

export const CardDetailsScreen = connect(mapStateToProps)(CardDetailsContainer);
