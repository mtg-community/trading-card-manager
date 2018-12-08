import React from 'react';
import { connect } from 'react-redux';
import {
  counterSelector,
  decrementCounterAction,
  incrementCounterAction,
} from '../../core/frameworks/redux/ducks';
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
