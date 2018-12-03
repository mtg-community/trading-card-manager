// @flow strict

import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../../../../domain/src/entities';
import { type ItemType } from '../shared/presentational/floatingActionButton';

import { CardDetails } from './presentational/cardDetails';

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

const cardStub = new Card();

const CardDetailsContainer = (props: PropTypes) => (
  <CardDetails card={props.card || cardStub} fabItems={fabItems} />
);

const mapStateToProps = state => {
  return {};
};

export const CardDetailsScreen = connect(mapStateToProps)(CardDetailsContainer);
