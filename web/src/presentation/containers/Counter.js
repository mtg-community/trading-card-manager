import React from 'react';
import { connect } from 'react-redux';
import {
  counterSelector,
  incrementCounterAction,
  decrementCounterAction,
} from 'core';
import { CounterComponent } from '../components/Counter';

function CounterContainer({ increment, decrement, counter, handleChangeLocale }) {
  return (
    <CounterComponent
      handleIncrement={() => increment(1)}
      handleDecrement={() => decrement(1)}
      counter={counter}
      handleChangeLocale={() => handleChangeLocale('en')}
    />
  );
}

const mapStateToProps = state => ({
  counter: counterSelector(state),
});

const mapDispatchToProps = {
  increment: incrementCounterAction,
  decrement: decrementCounterAction,
};

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
