import React from 'react';
import { connect } from 'react-redux';
import { Actions, Selectors } from 'core';
import { CounterComponent } from '../components/Counter';

export function CounterContainer({increment,decrement, counter}) {
  return (
    <CounterComponent
      handleIncrement={() => increment(1)}
      handleDecrement={() => decrement(1)}
      counter={counter}
    />
  );
}

const mapStateToProps = state => ({
  counter: Selectors.counter(state),
});

const mapDispatchToProps = {
  increment: Actions.increment,
  decrement: Actions.decrement,
};

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
