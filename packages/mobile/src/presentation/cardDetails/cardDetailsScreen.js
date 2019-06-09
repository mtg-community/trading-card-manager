// @flow strict

import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'core';
import { CardDetails } from './dumb/cardDetails';
import { liliana } from '../../data/cards/cardStubs';

type PropTypes = {
  card: Card,
};

const CardDetailsContainer = (props: PropTypes) => (
  <CardDetails card={liliana} />
);

const mapStateToProps = state => {
  return {};
};

export const CardDetailsScreen = connect(mapStateToProps)(CardDetailsContainer);
